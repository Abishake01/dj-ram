import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

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

export const generateEstimatePDF = (data: BillingData): void => {
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

  // Header Section with Logo
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

  // Estimate Details (Right aligned)
  yPos = 20;
  doc.setFontSize(16);
  doc.setTextColor(...darkColor);
  doc.setFont(undefined, 'bold');
  doc.text('ESTIMATE', 160, yPos);
  
  yPos += 8;
  doc.setFontSize(10);
  doc.setFont(undefined, 'normal');
  doc.setTextColor(...grayColor);
  doc.text(`Estimate No.: ${data.estimateNo}`, 160, yPos);
  yPos += 5;
  doc.text(`Date: ${data.date}`, 160, yPos);

  // Customer Details Section
  yPos = 60;
  doc.setFontSize(12);
  doc.setTextColor(...darkColor);
  doc.setFont(undefined, 'bold');
  doc.text('Bill To:', 20, yPos);
  
  yPos += 8;
  doc.setFontSize(10);
  doc.setFont(undefined, 'normal');
  doc.text(data.customerName, 20, yPos);
  yPos += 5;
  doc.text(`Phone: ${data.customerPhone}`, 20, yPos);
  yPos += 5;
  
  // Handle multi-line address
  const addressLines = doc.splitTextToSize(data.customerAddress, 80);
  doc.text(addressLines, 20, yPos);

  // Items Table
  yPos += addressLines.length * 5 + 10;
  
  const tableData = data.items.map((item, index) => [
    (index + 1).toString(),
    item.itemName,
    item.quantity.toString(),
    `₹${item.amount.toFixed(2)}`
  ]);

  autoTable(doc, {
    startY: yPos,
    head: [['S.No', 'Item Name', 'Quantity', 'Amount']],
    body: tableData,
    theme: 'striped',
    headStyles: {
      fillColor: primaryColor,
      textColor: [255, 255, 255],
      fontStyle: 'bold',
      fontSize: 10
    },
    bodyStyles: {
      textColor: darkColor,
      fontSize: 9
    },
    alternateRowStyles: {
      fillColor: [245, 245, 245]
    },
    columnStyles: {
      0: { cellWidth: 20, halign: 'center' },
      1: { cellWidth: 80, halign: 'left' },
      2: { cellWidth: 30, halign: 'center' },
      3: { cellWidth: 40, halign: 'right' }
    },
    margin: { left: 20, right: 20 }
  });

  // Calculate totals
  const subtotal = data.items.reduce((sum, item) => sum + item.amount, 0);
  const discountAmount = data.discount;
  const gstAmount = data.gst;
  const finalAmount = subtotal - discountAmount + gstAmount;

  // Summary Section
  const finalY = (doc as any).lastAutoTable.finalY + 15;
  
  doc.setFontSize(10);
  doc.setTextColor(...darkColor);
  
  // Right align summary
  const summaryX = 150;
  let summaryY = finalY;
  
  doc.text('Subtotal:', summaryX, summaryY);
  doc.text(`₹${subtotal.toFixed(2)}`, 190, summaryY, { align: 'right' });
  
  summaryY += 6;
  doc.text('Discount:', summaryX, summaryY);
  doc.text(`₹${discountAmount.toFixed(2)}`, 190, summaryY, { align: 'right' });
  
  summaryY += 6;
  doc.text('GST:', summaryX, summaryY);
  doc.text(`₹${gstAmount.toFixed(2)}`, 190, summaryY, { align: 'right' });
  
  summaryY += 8;
  doc.setFont(undefined, 'bold');
  doc.setFontSize(12);
  doc.setTextColor(...primaryColor);
  doc.text('Final Amount:', summaryX, summaryY);
  doc.text(`₹${finalAmount.toFixed(2)}`, 190, summaryY, { align: 'right' });

  // Footer Section
  summaryY += 20;
  doc.setFontSize(8);
  doc.setFont(undefined, 'normal');
  doc.setTextColor(...grayColor);
  doc.text('Terms and Conditions:', 20, summaryY);
  summaryY += 5;
  doc.text('• This is an estimate and subject to change based on final requirements.', 20, summaryY);
  summaryY += 4;
  doc.text('• Payment terms as agreed upon.', 20, summaryY);
  summaryY += 4;
  doc.text('• Valid for 30 days from the date of issue.', 20, summaryY);

  // Signature Section
  summaryY += 15;
  doc.setFontSize(9);
  doc.setTextColor(...darkColor);
  doc.text('Client Signature:', 20, summaryY);
  doc.text('Authorized Signature:', 120, summaryY);
  
  summaryY += 15;
  doc.setLineWidth(0.5);
  doc.setDrawColor(...grayColor);
  doc.line(20, summaryY, 80, summaryY);
  doc.line(120, summaryY, 180, summaryY);

  // Save PDF
  const fileName = `Estimate_${data.estimateNo}_${data.date.replace(/\//g, '-')}.pdf`;
  doc.save(fileName);
};

