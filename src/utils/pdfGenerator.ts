import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import logoIcon from '../assets/icon.png';

export interface BillingData {
  estimateNo: string;
  date: string;
  customerName: string;
  customerPhone: string;
  customerAddress: string;
  items: Array<{
    itemName: string;
    quantity: number;
    amount: number;
  }>;
  discount: number;
  gst: number;
}

export const generateEstimatePDF = async (data: BillingData): Promise<void> => {
  const doc = new jsPDF();
  
  // Company Information
  const companyName = 'REMO DJ SOUND & EVENTS';
  const companyAddress = '2/35, Main Road, G.Ariyur';
  const companyCity = 'Thirukovilur, Kallakurichi';
  const companyPin = 'Pin - 605 751';
  const companyPhone = '+91 74022 41381 / +91 85081 21111';
  const companyInstagram = '@dj_remo_official';

  // Colors (as tuples for TypeScript)
  const primaryColor: [number, number, number] = [138, 43, 226]; // Purple
  const darkColor: [number, number, number] = [0, 0, 0];
  const grayColor: [number, number, number] = [128, 128, 128];

  // Add Logo (Right side top) - Using base64 approach
  const addLogo = async () => {
    try {
      // Fetch the image and convert to base64
      const response = await fetch(logoIcon);
      const blob = await response.blob();
      const reader = new FileReader();
      
      return new Promise<void>((resolve) => {
        reader.onloadend = () => {
          const base64data = reader.result as string;
          if (base64data) {
            const logoWidth = 30;
            const logoHeight = 30;
            const logoX = 170; // Right side
            const logoY = 15; // Top
            
            // Add logo image
            doc.addImage(base64data, 'PNG', logoX, logoY, logoWidth, logoHeight);
          }
          resolve();
        };
        reader.onerror = () => resolve();
        reader.readAsDataURL(blob);
      });
    } catch (error) {
      // Continue if logo fails to load
      return Promise.resolve();
    }
  };
  
  await addLogo();

  // Header Section (Left side)
  let yPos = 20;
  
  // Company name as header
  doc.setFontSize(24);
  doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.setFont('helvetica', 'bold');
  doc.text(companyName, 20, yPos);

  yPos += 8;
  doc.setFontSize(10);
  doc.setTextColor(grayColor[0], grayColor[1], grayColor[2]);
  doc.text(companyAddress, 20, yPos);
  yPos += 5;
  doc.text(companyCity, 20, yPos);
  yPos += 5;
  doc.text(companyPin, 20, yPos);
  yPos += 5;
  doc.text(`Phone: ${companyPhone}`, 20, yPos);
  yPos += 5;
  doc.text(`Instagram: ${companyInstagram}`, 20, yPos);

  // Estimate Details (Right side, below logo)
  yPos = 50; // Below logo
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(grayColor[0], grayColor[1], grayColor[2]);
  doc.text(`Estimate No.: ${data.estimateNo}`, 170, yPos, { align: 'right' });
  yPos += 5;
  doc.text(`Date: ${data.date}`, 170, yPos, { align: 'right' });

  // Customer Details Section
  yPos = 70;
  doc.setFontSize(12);
  doc.setTextColor(darkColor[0], darkColor[1], darkColor[2]);
  doc.setFont('helvetica', 'bold');
  doc.text('Bill To:', 20, yPos);
  
  yPos += 8;
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.text(data.customerName, 20, yPos);
  yPos += 5;
  doc.text(`Phone: ${data.customerPhone}`, 20, yPos);
  yPos += 5;
  
  // Handle multi-line address
  const addressLines = doc.splitTextToSize(data.customerAddress, 80);
  doc.text(addressLines, 20, yPos);

  // Items Table - Calculate proper start position
  const tableStartY = yPos + (addressLines.length * 5) + 15;
  
  const tableData = data.items.map((item, index) => [
    (index + 1).toString(),
    item.itemName,
    item.quantity.toString(),
    `₹${item.amount.toFixed(2)}`
  ]);

  autoTable(doc, {
    startY: tableStartY,
    head: [['S.No', 'Item Name', 'Quantity', 'Amount']],
    body: tableData,
    theme: 'striped',
    headStyles: {
      fillColor: primaryColor as [number, number, number],
      textColor: [255, 255, 255] as [number, number, number],
      fontStyle: 'bold',
      fontSize: 11,
      cellPadding: 5
    },
    bodyStyles: {
      textColor: darkColor as [number, number, number],
      fontSize: 10,
      cellPadding: 5
    },
    alternateRowStyles: {
      fillColor: [250, 250, 250]
    },
    columnStyles: {
      0: { cellWidth: 25, halign: 'center' },
      1: { cellWidth: 100, halign: 'left' },
      2: { cellWidth: 35, halign: 'center' },
      3: { cellWidth: 40, halign: 'right' }
    },
    margin: { left: 20, right: 20 },
    styles: {
      lineWidth: 0.1,
      lineColor: [200, 200, 200]
    }
  });

  // Calculate totals
  const subtotal = data.items.reduce((sum, item) => sum + item.amount, 0);
  const discountAmount = data.discount;
  const gstAmount = data.gst;
  const finalAmount = subtotal - discountAmount + gstAmount;

  // Summary Section - Add proper spacing after table
  const finalY = (doc as any).lastAutoTable.finalY + 20; // Increased spacing
  
  doc.setFontSize(10);
  doc.setTextColor(darkColor[0], darkColor[1], darkColor[2]);
  doc.setFont('helvetica', 'normal');
  
  // Right align summary
  const summaryX = 140;
  let summaryY = finalY;
  
  doc.text('Subtotal:', summaryX, summaryY);
  doc.text(`₹${subtotal.toFixed(2)}`, 190, summaryY, { align: 'right' });
  
  summaryY += 7;
  doc.text('Discount:', summaryX, summaryY);
  doc.text(`₹${discountAmount.toFixed(2)}`, 190, summaryY, { align: 'right' });
  
  summaryY += 7;
  doc.text('GST:', summaryX, summaryY);
  doc.text(`₹${gstAmount.toFixed(2)}`, 190, summaryY, { align: 'right' });
  
  summaryY += 10;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.text('Final Amount:', summaryX, summaryY);
  doc.text(`₹${finalAmount.toFixed(2)}`, 190, summaryY, { align: 'right' });

  // Footer Section - Terms and Conditions
  summaryY += 25;
  doc.setFontSize(9);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(darkColor[0], darkColor[1], darkColor[2]);
  doc.text('Terms and Conditions:', 20, summaryY);
  
  summaryY += 6;
  doc.setFontSize(8);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(grayColor[0], grayColor[1], grayColor[2]);
  doc.text('• This is an estimate and subject to change based on final requirements.', 20, summaryY);
  summaryY += 5;
  doc.text('• Payment terms as agreed upon.', 20, summaryY);
  summaryY += 5;
  doc.text('• Valid for 30 days from the date of issue.', 20, summaryY);

  // Save PDF
  const fileName = `Estimate_${data.estimateNo}_${data.date.replace(/\//g, '-')}.pdf`;
  doc.save(fileName);
};

