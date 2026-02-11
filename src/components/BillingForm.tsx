import React, { useState, useEffect } from 'react';
import { generateEstimatePDF } from '../utils/pdfGenerator';
import type { BillingData } from '../utils/pdfGenerator';

interface BillingItem {
  itemName: string;
  quantity: number;
  amount: number;
}

interface BillingFormProps {
  onClose: () => void;
}

const BillingForm: React.FC<BillingFormProps> = ({ onClose }) => {
  const [estimateNo, setEstimateNo] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [items, setItems] = useState<BillingItem[]>([
    { itemName: '', quantity: 1, amount: 0 }
  ]);
  const [discount, setDiscount] = useState(0);
  const [gst, setGst] = useState(0);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Calculate totals
  const subtotal = items.reduce((sum, item) => sum + (item.quantity * item.amount), 0);
  const finalAmount = subtotal - discount + gst;

  // Auto-generate estimate number if empty
  useEffect(() => {
    if (!estimateNo) {
      const today = new Date();
      const year = today.getFullYear();
      const month = String(today.getMonth() + 1).padStart(2, '0');
      const day = String(today.getDate()).padStart(2, '0');
      setEstimateNo(`EST-${year}${month}${day}-001`);
    }
  }, [estimateNo]);

  const addItem = () => {
    setItems([...items, { itemName: '', quantity: 1, amount: 0 }]);
  };

  const removeItem = (index: number) => {
    if (items.length > 1) {
      setItems(items.filter((_, i) => i !== index));
    }
  };

  const updateItem = (index: number, field: keyof BillingItem, value: string | number) => {
    const newItems = [...items];
    newItems[index] = { ...newItems[index], [field]: value };
    setItems(newItems);
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!estimateNo.trim()) {
      newErrors.estimateNo = 'Estimate number is required';
    }

    if (!date) {
      newErrors.date = 'Date is required';
    }

    if (!customerName.trim()) {
      newErrors.customerName = 'Customer name is required';
    }

    if (!customerPhone.trim()) {
      newErrors.customerPhone = 'Customer phone is required';
    }

    if (!customerAddress.trim()) {
      newErrors.customerAddress = 'Customer address is required';
    }

    // Validate items
    items.forEach((item, index) => {
      if (!item.itemName.trim()) {
        newErrors[`itemName_${index}`] = 'Item name is required';
      }
      if (item.quantity <= 0) {
        newErrors[`quantity_${index}`] = 'Quantity must be greater than 0';
      }
      if (item.amount < 0) {
        newErrors[`amount_${index}`] = 'Amount cannot be negative';
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleGeneratePDF = () => {
    if (!validateForm()) {
      return;
    }

    const billingData: BillingData = {
      estimateNo,
      date: new Date(date).toLocaleDateString('en-GB'),
      customerName,
      customerPhone,
      customerAddress,
      items: items.map(item => ({
        itemName: item.itemName,
        quantity: item.quantity,
        amount: item.quantity * item.amount
      })),
      discount,
      gst
    };

    generateEstimatePDF(billingData);
  };

  return (
    <div className="max-h-[90vh] overflow-y-auto">
      <div className="p-6">
        <h2 className="text-3xl font-bold text-white mb-6 glow-purple">Create Estimate</h2>

        {/* Estimate Details */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-gray-300 mb-2">Estimate Number *</label>
            <input
              type="text"
              value={estimateNo}
              onChange={(e) => setEstimateNo(e.target.value)}
              className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-white focus:border-neon-purple focus:outline-none"
              placeholder="EST-20240101-001"
            />
            {errors.estimateNo && <p className="text-red-400 text-sm mt-1">{errors.estimateNo}</p>}
          </div>
          <div>
            <label className="block text-gray-300 mb-2">Date *</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-white focus:border-neon-purple focus:outline-none"
            />
            {errors.date && <p className="text-red-400 text-sm mt-1">{errors.date}</p>}
          </div>
        </div>

        {/* Customer Details */}
        <div className="mb-6">
          <h3 className="text-xl font-bold text-neon-blue mb-4">Customer Details</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-300 mb-2">Customer Name *</label>
              <input
                type="text"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-white focus:border-neon-purple focus:outline-none"
                placeholder="Enter customer name"
              />
              {errors.customerName && <p className="text-red-400 text-sm mt-1">{errors.customerName}</p>}
            </div>
            <div>
              <label className="block text-gray-300 mb-2">Phone Number *</label>
              <input
                type="tel"
                value={customerPhone}
                onChange={(e) => setCustomerPhone(e.target.value)}
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-white focus:border-neon-purple focus:outline-none"
                placeholder="+91 1234567890"
              />
              {errors.customerPhone && <p className="text-red-400 text-sm mt-1">{errors.customerPhone}</p>}
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-gray-300 mb-2">Address *</label>
            <textarea
              value={customerAddress}
              onChange={(e) => setCustomerAddress(e.target.value)}
              rows={3}
              className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-white focus:border-neon-purple focus:outline-none"
              placeholder="Enter customer address"
            />
            {errors.customerAddress && <p className="text-red-400 text-sm mt-1">{errors.customerAddress}</p>}
          </div>
        </div>

        {/* Items Table */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold text-neon-blue">Items</h3>
            <button
              onClick={addItem}
              className="bg-neon-purple text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition-colors"
            >
              + Add Item
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-800">
                  <th className="border border-gray-700 px-4 py-2 text-left text-gray-300">S.No</th>
                  <th className="border border-gray-700 px-4 py-2 text-left text-gray-300">Item Name</th>
                  <th className="border border-gray-700 px-4 py-2 text-left text-gray-300">Quantity</th>
                  <th className="border border-gray-700 px-4 py-2 text-left text-gray-300">Amount (per unit)</th>
                  <th className="border border-gray-700 px-4 py-2 text-left text-gray-300">Total</th>
                  <th className="border border-gray-700 px-4 py-2 text-left text-gray-300">Action</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item, index) => (
                  <tr key={index} className="bg-gray-900">
                    <td className="border border-gray-700 px-4 py-2 text-white">{index + 1}</td>
                    <td className="border border-gray-700 px-4 py-2">
                      <input
                        type="text"
                        value={item.itemName}
                        onChange={(e) => updateItem(index, 'itemName', e.target.value)}
                        className="w-full bg-gray-800 border border-gray-700 rounded px-2 py-1 text-white focus:border-neon-purple focus:outline-none"
                        placeholder="Item name"
                      />
                      {errors[`itemName_${index}`] && (
                        <p className="text-red-400 text-xs mt-1">{errors[`itemName_${index}`]}</p>
                      )}
                    </td>
                    <td className="border border-gray-700 px-4 py-2">
                      <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) => updateItem(index, 'quantity', parseInt(e.target.value) || 1)}
                        className="w-full bg-gray-800 border border-gray-700 rounded px-2 py-1 text-white focus:border-neon-purple focus:outline-none"
                      />
                      {errors[`quantity_${index}`] && (
                        <p className="text-red-400 text-xs mt-1">{errors[`quantity_${index}`]}</p>
                      )}
                    </td>
                    <td className="border border-gray-700 px-4 py-2">
                      <input
                        type="number"
                        min="0"
                        step="0.01"
                        value={item.amount}
                        onChange={(e) => updateItem(index, 'amount', parseFloat(e.target.value) || 0)}
                        className="w-full bg-gray-800 border border-gray-700 rounded px-2 py-1 text-white focus:border-neon-purple focus:outline-none"
                        placeholder="0.00"
                      />
                      {errors[`amount_${index}`] && (
                        <p className="text-red-400 text-xs mt-1">{errors[`amount_${index}`]}</p>
                      )}
                    </td>
                    <td className="border border-gray-700 px-4 py-2 text-white">
                      ₹{(item.quantity * item.amount).toFixed(2)}
                    </td>
                    <td className="border border-gray-700 px-4 py-2">
                      {items.length > 1 && (
                        <button
                          onClick={() => removeItem(index)}
                          className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition-colors"
                        >
                          Remove
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Summary */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-6 mb-6">
          <h3 className="text-xl font-bold text-neon-green mb-4">Summary</h3>
          <div className="space-y-3">
            <div className="flex justify-between text-gray-300">
              <span>Subtotal:</span>
              <span>₹{subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center">
              <label className="text-gray-300">Discount:</label>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  min="0"
                  step="0.01"
                  value={discount}
                  onChange={(e) => setDiscount(parseFloat(e.target.value) || 0)}
                  className="w-32 bg-gray-800 border border-gray-700 rounded px-3 py-1 text-white focus:border-neon-purple focus:outline-none"
                  placeholder="0.00"
                />
                <span className="text-gray-300">₹</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <label className="text-gray-300">GST:</label>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  min="0"
                  step="0.01"
                  value={gst}
                  onChange={(e) => setGst(parseFloat(e.target.value) || 0)}
                  className="w-32 bg-gray-800 border border-gray-700 rounded px-3 py-1 text-white focus:border-neon-purple focus:outline-none"
                  placeholder="0.00"
                />
                <span className="text-gray-300">₹</span>
              </div>
            </div>
            <div className="border-t border-gray-700 pt-3 mt-3">
              <div className="flex justify-between">
                <span className="text-xl font-bold text-neon-purple">Final Amount:</span>
                <span className="text-xl font-bold text-neon-purple">₹{finalAmount.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 justify-end">
          <button
            onClick={onClose}
            className="px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleGeneratePDF}
            className="px-6 py-3 bg-gradient-purple-blue text-white rounded-lg hover:opacity-90 transition-opacity font-semibold"
          >
            Generate & Download PDF
          </button>
        </div>
      </div>
    </div>
  );
};

export default BillingForm;

