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
  const companyPhone = '+91 74022 41381';

  // Colors (as tuples for TypeScript)
  const primaryColor: [number, number, number] = [138, 43, 226]; // Purple
  const darkColor: [number, number, number] = [0, 0, 0];
  const grayColor: [number, number, number] = [128, 128, 128];

  // Add Logo (Left side top) - Using base64 approach
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
            const logoX = 20; // Left side
            const logoY = 25; // Top
            
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

  // Header Section (Right side) - Company name and address
  let yPos = 20;
  
  // Company name as header (right aligned)
  doc.setFontSize(24);
  doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.setFont('helvetica', 'bold');
  doc.text(companyName, 105, yPos, { align: 'center' });

  yPos += 8;
  doc.setFontSize(10);
  doc.setTextColor(grayColor[0], grayColor[1], grayColor[2]);
  doc.text(companyAddress, 190, yPos, { align: 'right' });
  yPos += 5;
  doc.text(companyCity, 190, yPos, { align: 'right' });
  yPos += 5;
  doc.text(companyPin, 190, yPos, { align: 'right' });
  yPos += 5;
  doc.text(`Phone: ${companyPhone}`, 190, yPos, { align: 'right' });
   
  // Estimate Details (Right side, below company info)
  yPos = 50; // Below company info
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(grayColor[0], grayColor[1], grayColor[2]);
  doc.text(`Estimate No.: ${data.estimateNo}`, 190, yPos, { align: 'right' });
  yPos += 5;
  doc.text(`Date: ${data.date}`, 190, yPos, { align: 'right' });

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
  
  // Format numbers without spaces and without currency symbol to avoid encoding issues
  const formatCurrency = (amount: number): string => {
    // Convert to string, remove spaces, and return plain number
    const numStr = amount.toFixed(2);
    // Remove any spaces and return clean number string
    return numStr.replace(/\s/g, '');
  };

  const tableData = data.items.map((item, index) => [
    (index + 1).toString(),
    item.itemName,
    item.quantity.toString(),
    formatCurrency(item.amount) // Plain number without symbol to avoid encoding issues
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
      cellPadding: 5,
      font: 'helvetica' // Ensure consistent font
    },
    alternateRowStyles: {
      fillColor: [250, 250, 250]
    },
    columnStyles: {
      0: { cellWidth: 20, halign: 'center' },
      1: { cellWidth: 90, halign: 'left' },
      2: { cellWidth: 30, halign: 'center' },
      3: { cellWidth: 35, halign: 'center' }
    },
    margin: { left: 20, right: 20 },
    tableWidth: 165, // Increased width for better spacing
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
  
  // Format currency without spaces and without symbol to avoid encoding issues
  const formatAmount = (amount: number): string => {
    const numStr = amount.toFixed(2);
    // Remove any spaces and return clean number
    return numStr.replace(/\s/g, '');
  };

  doc.text('Subtotal:', summaryX, summaryY);
  doc.text(formatAmount(subtotal), 190, summaryY, { align: 'right' });
  
  summaryY += 7;
  doc.text('Discount:', summaryX, summaryY);
  doc.text(formatAmount(discountAmount), 190, summaryY, { align: 'right' });
  
  summaryY += 7;
  doc.text('GST:', summaryX, summaryY);
  doc.text(formatAmount(gstAmount), 190, summaryY, { align: 'right' });
  
  summaryY += 10;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.text('Final Amount:', summaryX, summaryY);
  doc.text(formatAmount(finalAmount), 190, summaryY, { align: 'right' });

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

