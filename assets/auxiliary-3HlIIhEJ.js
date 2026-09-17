function $(c,t,a,s,e,i,p="Valued Customer",g=""){const d=e.currency==="INR",n=d?"₹":"$",b=d?`INV-${Math.floor(1e5+Math.random()*9e5)}`:`RFQ-${Math.floor(1e5+Math.random()*9e5)}`,v=d?new Date().toLocaleDateString("en-IN",{day:"2-digit",month:"short",year:"numeric"}):new Date().toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}),f=i.upiId||"shop@upi",m=e.finalTotalWithGst,l=Math.round(m/2*100)/100,x=`upi://pay?pa=${encodeURIComponent(f)}&pn=${encodeURIComponent(i.shopName)}&am=${l.toFixed(2)}&cu=INR&tn=${encodeURIComponent(b)}`,y=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(x)}`,u=d?`Dim: ${t.boundingBoxWidthMm.toFixed(0)} × ${t.boundingBoxHeightMm.toFixed(0)} mm | Thick: ${s.thicknessMm} mm<br>Grade: ${a} (${s.gaugeName}) | Gas: ${i.assistGas.toUpperCase()}<br>Cut Length: ${(t.totalCutLengthMm/1e3).toFixed(2)} m | Pierces: ${t.pierceCount} / pc`:`Dim: ${t.boundingBoxWidthInches.toFixed(2)}" × ${t.boundingBoxHeightInches.toFixed(2)}" | Gauge: ${s.gaugeName}<br>Grade: ${a} | Gas: ${i.assistGas.toUpperCase()}<br>Cut Length: ${t.totalCutLengthInches.toFixed(1)} in | Pierces: ${t.pierceCount} / pc | Est. Weight: ${t.theoreticalWeightLbs.toFixed(2)} lbs`;return`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>${d?"Proforma Invoice":"Commercial Quotation"} - ${b}</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; color: #1e293b; margin: 0; padding: 30px; background: #fff; line-height: 1.5; }
    .invoice-card { max-width: 800px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; padding: 32px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); }
    .header-row { display: flex; justify-content: space-between; border-bottom: 2px solid #0284c7; padding-bottom: 20px; margin-bottom: 24px; }
    .shop-title { font-size: 22px; font-weight: 800; color: #0f172a; margin: 0; }
    .shop-meta { font-size: 13px; color: #64748b; margin-top: 4px; }
    .invoice-tag { text-align: right; }
    .invoice-title { font-size: 20px; font-weight: 800; color: #0284c7; margin: 0; text-transform: uppercase; }
    .invoice-meta { font-size: 13px; color: #475569; margin-top: 4px; }
    .bill-to-box { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 14px 18px; margin-bottom: 24px; font-size: 14px; }
    table { width: 100%; border-collapse: collapse; margin-bottom: 24px; font-size: 14px; }
    th { background: #f1f5f9; color: #334155; text-align: left; padding: 10px 12px; border-bottom: 2px solid #cbd5e1; font-weight: 700; }
    td { padding: 10px 12px; border-bottom: 1px solid #e2e8f0; vertical-align: top; }
    .text-right { text-align: right; }
    .text-center { text-align: center; }
    .summary-grid { display: flex; justify-content: space-between; align-items: flex-start; margin-top: 20px; }
    .upi-box { border: 1px dashed #0284c7; background: #f0f9ff; border-radius: 8px; padding: 14px; text-align: center; width: 220px; }
    .upi-box img { width: 120px; height: 120px; border-radius: 4px; margin-bottom: 6px; }
    .upi-title { font-size: 12px; font-weight: 700; color: #0369a1; text-transform: uppercase; }
    .upi-sub { font-size: 11px; color: #64748b; }
    .terms-box { border: 1px solid #cbd5e1; background: #f8fafc; border-radius: 8px; padding: 14px; width: 260px; font-size: 12px; color: #334155; }
    .terms-title { font-size: 11px; font-weight: 800; color: #0284c7; text-transform: uppercase; margin-bottom: 8px; border-bottom: 1px solid #e2e8f0; padding-bottom: 4px; }
    .terms-item { margin-bottom: 5px; }
    .totals-table { width: 340px; }
    .totals-table td { padding: 6px 10px; }
    .total-row { font-size: 16px; font-weight: 800; color: #0f172a; border-top: 2px solid #0284c7; }
    .footer-terms { margin-top: 32px; border-top: 1px solid #e2e8f0; padding-top: 16px; font-size: 12px; color: #64748b; }
    .print-btn-bar { text-align: center; margin-bottom: 20px; }
    .btn-print { background: #0284c7; color: #fff; font-size: 14px; font-weight: 600; padding: 8px 18px; border: none; border-radius: 6px; cursor: pointer; }
    @media print {
      .print-btn-bar { display: none; }
      body { padding: 0; background: #fff; }
      .invoice-card { border: none; box-shadow: none; padding: 0; }
    }
  </style>
</head>
<body>
  <div class="print-btn-bar">
    <button class="btn-print" onclick="window.print()">🖨️ Print / Save as PDF</button>
  </div>
  <div class="invoice-card">
    <div class="header-row">
      <div style="display: flex; align-items: center; gap: 16px;">
        <img src="/logo-mark.svg" alt="CNC Laser" style="width: 52px; height: 52px; border-radius: 8px; flex-shrink: 0;" />
        <div>
          <h1 class="shop-title">${i.shopName}</h1>
          <div class="shop-meta">
            <div>${i.shopAddress||(d?"MIDC Industrial Area, Pune, Maharashtra":"1420 Industrial Pkwy, Cleveland, OH 44135")}</div>
            <div>Phone: ${i.shopPhone||(d?"+91 98220 12345":"(216) 555-0198")} ${d?`| UPI: <strong>${f}</strong>`:""}</div>
            ${d?`<div>GSTIN: <strong>${i.shopGstin||"27AABCS1429B1Z8"}</strong> | State Code: 27 (MH)</div>`:`<div>NAICS: <strong>${i.naicsCode||"332813"}</strong> | Tax ID / EIN: <strong>${i.einOrTaxId||"Verified"}</strong></div>`}
          </div>
        </div>
      </div>
      <div class="invoice-tag">
        <h2 class="invoice-title">${d?"PROFORMA INVOICE":"COMMERCIAL MANUFACTURING QUOTATION"}</h2>
        <div class="invoice-meta">
          <div>Ref No: <strong>${b}</strong></div>
          <div>Date: <strong>${v}</strong></div>
          <div>${d?`SAC/HSN: <strong>${e.hsnSacCode.split(" ")[0]}</strong>`:`NAICS: <strong>${i.naicsCode?i.naicsCode.split(" ")[0]:"332813"}</strong> | Validity: <strong>15 Days</strong>`}</div>
        </div>
      </div>
    </div>

    <div class="bill-to-box">
      <strong>Customer:</strong> ${p} ${g?`(${g})`:""} — <em>Delivery: ${d?"Ex-Works / 24-48 Hours":"FOB Origin / 3-5 Business Days"}</em>
    </div>

    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Item Description & Specs</th>
          <th class="text-center">Mode</th>
          <th class="text-right">Qty</th>
          <th class="text-right">Unit Rate</th>
          <th class="text-right">Amount (${n})</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>
            <strong>${c.name}</strong><br>
            <span style="font-size: 12px; color: #64748b;">
              ${u}
            </span>
          </td>
          <td class="text-center"><span style="background: #e0f2fe; color: #0369a1; padding: 3px 8px; border-radius: 4px; font-size: 11px; font-weight: 700;">${d?e.quotingMode.toUpperCase():"CUSTOM FAB"}</span></td>
          <td class="text-right">${e.quantity}</td>
          <td class="text-right">${n}${e.discountedUnitPrice.toFixed(2)}</td>
          <td class="text-right"><strong>${n}${(e.discountedUnitPrice*e.quantity).toFixed(2)}</strong></td>
        </tr>
        ${e.unitSecondaryCost>0?`
        <tr>
          <td>2</td>
          <td>
            <strong>Secondary Value-Add Operations</strong><br>
            <span style="font-size: 12px; color: #64748b;">
              ${e.secondaryBreakdown.bendingCost>0?`CNC Press Brake Bending (${n}${e.secondaryBreakdown.bendingCost}) | `:""}
              ${e.secondaryBreakdown.deburringCost>0?`Edge Deburring (${n}${e.secondaryBreakdown.deburringCost}) | `:""}
              ${e.secondaryBreakdown.tappingCost>0?`Tapping (${n}${e.secondaryBreakdown.tappingCost}) | `:""}
              ${e.secondaryBreakdown.surfaceFinishCost>0?`Surface Finishing (${n}${e.secondaryBreakdown.surfaceFinishCost})`:""}
            </span>
          </td>
          <td class="text-center"><span style="background: #f1f5f9; color: #475569; padding: 3px 8px; border-radius: 4px; font-size: 11px;">VALUE-ADD</span></td>
          <td class="text-right">${e.quantity}</td>
          <td class="text-right">${n}${e.unitSecondaryCost.toFixed(2)}</td>
          <td class="text-right"><strong>${n}${(e.unitSecondaryCost*e.quantity).toFixed(2)}</strong></td>
        </tr>`:""}
      </tbody>
    </table>

    <div class="summary-grid">
      ${d?`
      <div class="upi-box">
        <div class="upi-title">Scan to Pay 50% Advance</div>
        <img src="${y}" alt="UPI QR Code">
        <div class="upi-sub">GPay / PhonePe / Paytm<br>Advance: <strong>${n}${l.toFixed(2)}</strong></div>
      </div>
      `:`
      <div class="terms-box">
        <div class="terms-title">Commercial & Remittance Terms</div>
        <div class="terms-item">Payment Terms: <strong>${i.paymentTerms||"Net 30, Credit Card, ACH"}</strong></div>
        <div class="terms-item">Tax Status: <strong>${i.salesTaxExempt?"Tax-Exempt (Resale Certificate)":`Sales Tax (${i.gstPercent||7}%)`}</strong></div>
        <div class="terms-item">Lead Time: <strong>${i.leadTimeDays||3} to 5 Business Days ARO</strong></div>
        <div class="terms-item">Delivery: <strong>FOB Origin / Ex-Works</strong></div>
        <div class="terms-item">CAM Spec: <strong>Trumpf / SigmaNEST Cut-Ready DXF</strong></div>
      </div>
      `}

      <table class="totals-table">
        <tr>
          <td>Subtotal (Excl. Tax):</td>
          <td class="text-right">${n}${e.finalOrderTotal.toFixed(2)}</td>
        </tr>
        ${d?i.isInterstateSale?`
        <tr>
          <td>Integrated GST (IGST 18%):</td>
          <td class="text-right">${n}${e.igstAmount.toFixed(2)}</td>
        </tr>`:`
        <tr>
          <td>Central GST (CGST 9%):</td>
          <td class="text-right">${n}${e.cgstAmount.toFixed(2)}</td>
        </tr>
        <tr>
          <td>State GST (SGST 9%):</td>
          <td class="text-right">${n}${e.sgstAmount.toFixed(2)}</td>
        </tr>`:i.salesTaxExempt?`
        <tr>
          <td>Sales Tax (Tax-Exempt):</td>
          <td class="text-right">$0.00</td>
        </tr>
        `:`
        <tr>
          <td>Estimated Sales Tax (${i.gstPercent||7}%):</td>
          <td class="text-right">${n}${e.gstAmount.toFixed(2)}</td>
        </tr>
        `}
        <tr class="total-row">
          <td>Grand Total:</td>
          <td class="text-right" style="color: #0284c7;">${n}${e.finalTotalWithGst.toFixed(2)}</td>
        </tr>
      </table>
    </div>

    <div class="footer-terms">
      <strong>Terms & Conditions:</strong>
      <ol style="margin: 6px 0 0 16px; padding: 0;">
        ${d?`
        <li>Payment: 50% advance along with PO confirmation; balance before delivery.</li>
        <li>Material Tolerance: Cutting accuracy ±0.15 mm on CypCut fiber laser.</li>
        <li>Goods once cut as per confirmed drawing/DXF cannot be returned or cancelled.</li>
        <li>Subject to Pune jurisdiction.</li>
        `:`
        <li>Quotation is valid for 15 days from date of issue.</li>
        <li>Standard sheet metal laser cutting tolerance: ±0.005" to ±0.010" unless drawing specifies otherwise.</li>
        <li>Parts produced strictly to approved electronic CAD/DXF data. Material certifications available upon request.</li>
        <li>Payment terms Net 30 upon approved credit, or major credit cards/ACH prior to shipment.</li>
        `}
      </ol>
    </div>
  </div>
</body>
</html>`}function C(c,t,a,s,e,i){const p=`JOB-${Math.floor(1e3+Math.random()*9e3)}`,g=new Date().toLocaleDateString("en-IN",{day:"2-digit",month:"short",year:"numeric"});return`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Laser Job Card - ${p}</title>
  <style>
    body { font-family: monospace, sans-serif; color: #000; margin: 0; padding: 20px; background: #fff; }
    .job-card { max-width: 750px; margin: 0 auto; border: 2px solid #000; padding: 20px; }
    .header { text-align: center; border-bottom: 2px solid #000; padding-bottom: 12px; margin-bottom: 16px; }
    .header h1 { margin: 0; font-size: 20px; }
    .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 16px; }
    .box { border: 1px solid #000; padding: 10px; font-size: 13px; }
    .box-title { font-weight: bold; text-decoration: underline; margin-bottom: 6px; }
    table { width: 100%; border-collapse: collapse; margin-top: 12px; font-size: 12px; }
    th, td { border: 1px solid #000; padding: 6px; text-align: left; }
    th { background: #eee; }
    .checklist { margin-top: 16px; border: 1px solid #000; padding: 10px; }
    .sign-row { display: flex; justify-content: space-between; margin-top: 30px; font-size: 12px; }
    @media print { .no-print { display: none; } }
  </style>
</head>
<body>
  <div class="no-print" style="text-align: center; margin-bottom: 16px;">
    <button onclick="window.print()" style="padding: 8px 16px; font-weight: bold; cursor: pointer;">🖨️ Print Machine Job Card</button>
  </div>
  <div class="job-card">
    <div class="header">
      <h1>${i.shopName.toUpperCase()}</h1>
      <div>LASER CUTTING OPERATOR JOB CARD / SHOP TRAVELER</div>
      <div><strong>Card #: ${p}</strong> | Date: ${g}</div>
    </div>

    <div class="grid">
      <div class="box">
        <div class="box-title">PART & MATERIAL SPECIFICATIONS</div>
        <div>Part Name: <strong>${c.name}</strong></div>
        <div>Grade: <strong>${a}</strong></div>
        <div>Thickness: <strong>${s.thicknessMm} mm (${s.gaugeName})</strong></div>
        <div>Dimensions: <strong>${t.boundingBoxWidthMm.toFixed(1)} × ${t.boundingBoxHeightMm.toFixed(1)} mm</strong></div>
        <div>Est. Mass/pc: <strong>${t.theoreticalWeightKg.toFixed(2)} kg</strong></div>
      </div>
      <div class="box">
        <div class="box-title">PRODUCTION & CNC PARAMETERS</div>
        <div>Cut Qty: <strong>${e} PIECES</strong></div>
        <div>Assist Gas: <strong>${i.assistGas.toUpperCase()}</strong></div>
        <div>Pierces/pc: <strong>${t.pierceCount}</strong></div>
        <div>Cut Length: <strong>${(t.totalCutLengthMm/1e3).toFixed(2)} meters</strong></div>
        <div>CAM Software: <strong>CYPCUT (FSCUT)</strong></div>
      </div>
    </div>

    <div class="box">
      <div class="box-title">CYPCUT LAYER CONFIGURATION</div>
      <table>
        <thead>
          <tr>
            <th>Layer</th>
            <th>Color</th>
            <th>Function</th>
            <th>Toolpath Setting</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Layer 0</td>
            <td>White (7)</td>
            <td>Outer Contour</td>
            <td>External Kerf Offset + Lead-In</td>
          </tr>
          <tr>
            <td>Layer 1</td>
            <td>Yellow (2)</td>
            <td>Inner Holes / Cutouts</td>
            <td>Internal Kerf Offset + Pre-Pierce</td>
          </tr>
          <tr>
            <td>Layer 2</td>
            <td>Cyan (4)</td>
            <td>Center Marks / Etch</td>
            <td>Low-power Pulse / Zero Kerf</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="checklist">
      <div class="box-title">OPERATOR QUALITY CHECKLIST</div>
      <div>[ ] Sheet thickness confirmed with digital vernier calipers before loading</div>
      <div>[ ] Nozzle alignment centered (tape test passed)</div>
      <div>[ ] Focal position and assist gas pressure set correctly</div>
      <div>[ ] First-piece dimension inspection: Length: _____ mm | Hole Dia: _____ mm</div>
      <div>[ ] Cut edge visual check: Slag-free / minimal burr verified</div>
      <div>[ ] Total count verified: _____ pcs cut and packed</div>
    </div>

    <div class="sign-row">
      <div>Laser Operator: ___________________</div>
      <div>QC Inspector: ___________________</div>
      <div>Shop Supervisor: ___________________</div>
    </div>
  </div>
</body>
</html>`}function _(c,t){const a=t.currency==="INR",s=a?"₹":"$",e=c.shopSettings,i=`PRJ-${Math.floor(1e5+Math.random()*9e5)}`,p=a?new Date().toLocaleDateString("en-IN",{day:"2-digit",month:"short",year:"numeric"}):new Date().toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}),g=e.upiId||"shop@upi",d=t.finalTotalWithGst,n=Math.round(d/2*100)/100,b=`upi://pay?pa=${encodeURIComponent(g)}&pn=${encodeURIComponent(e.shopName)}&am=${n.toFixed(2)}&cu=INR&tn=${encodeURIComponent(i)}`,v=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(b)}`;let f="";for(let m=0;m<c.items.length;m++){const l=c.items[m],x=l.partGeometry.boundingBox,u=l.partGeometry.units==="inch"||!a?`${(x.width/(l.partGeometry.units==="inch"?1:25.4)).toFixed(2)}" × ${(x.height/(l.partGeometry.units==="inch"?1:25.4)).toFixed(2)}"`:`${x.width.toFixed(0)} × ${x.height.toFixed(0)} mm`,o=a?`${(l.metrics.totalCutLengthMm/1e3).toFixed(1)} m`:`${l.metrics.totalCutLengthInches.toFixed(1)} in`;f+=`
      <tr>
        <td class="text-center">${m+1}</td>
        <td>
          <strong>${l.partGeometry.name}</strong><br>
          <span style="font-size: 12px; color: #64748b;">
            ${u} | ${l.materialName} (${l.gaugeThicknessMm}mm) | Cut: ${o}
          </span>
        </td>
        <td class="text-center">${l.unitQuote.quotingMode==="job_work"?a?"Job Work":"Labor Only":a?"Turnkey":"Fabricated"}</td>
        <td class="text-right"><strong>${l.quantity}</strong></td>
        <td class="text-right">${s}${l.unitQuote.finalUnitPrice.toFixed(2)}</td>
        <td class="text-right"><strong>${s}${l.totalPrice.toFixed(2)}</strong></td>
      </tr>
    `}return`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>${a?"Project Tax Invoice":"Commercial Project Quotation"} - ${i}</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; color: #1e293b; margin: 0; padding: 30px; background: #fff; line-height: 1.5; }
    .invoice-card { max-width: 850px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; padding: 32px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); }
    .header-row { display: flex; justify-content: space-between; border-bottom: 2px solid #0284c7; padding-bottom: 20px; margin-bottom: 24px; }
    .shop-title { font-size: 22px; font-weight: 800; color: #0f172a; margin: 0; }
    .shop-meta { font-size: 13px; color: #64748b; margin-top: 4px; }
    .invoice-tag { text-align: right; }
    .invoice-title { font-size: 20px; font-weight: 800; color: #0284c7; margin: 0; text-transform: uppercase; }
    .invoice-meta { font-size: 13px; color: #475569; margin-top: 4px; }
    .bill-to-box { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 14px 18px; margin-bottom: 24px; font-size: 14px; }
    table { width: 100%; border-collapse: collapse; margin-bottom: 24px; font-size: 14px; }
    th { background: #f1f5f9; color: #334155; text-align: left; padding: 10px 12px; border-bottom: 2px solid #cbd5e1; font-weight: 700; }
    td { padding: 10px 12px; border-bottom: 1px solid #e2e8f0; vertical-align: top; }
    .text-right { text-align: right; }
    .text-center { text-align: center; }
    .summary-grid { display: flex; justify-content: space-between; align-items: flex-start; margin-top: 20px; }
    .upi-box { border: 1px dashed #0284c7; background: #f0f9ff; border-radius: 8px; padding: 14px; text-align: center; width: 220px; }
    .upi-box img { width: 120px; height: 120px; border-radius: 4px; margin-bottom: 6px; }
    .upi-title { font-size: 12px; font-weight: 700; color: #0369a1; text-transform: uppercase; }
    .upi-sub { font-size: 11px; color: #64748b; }
    .terms-box { border: 1px solid #cbd5e1; background: #f8fafc; border-radius: 8px; padding: 14px; width: 280px; font-size: 12px; color: #334155; }
    .terms-title { font-size: 11px; font-weight: 800; color: #0284c7; text-transform: uppercase; margin-bottom: 8px; border-bottom: 1px solid #e2e8f0; padding-bottom: 4px; }
    .terms-item { margin-bottom: 5px; }
    .totals-table { width: 360px; }
    .totals-table td { padding: 6px 10px; }
    .total-row { font-size: 16px; font-weight: 800; color: #0f172a; border-top: 2px solid #0284c7; }
    .footer-terms { margin-top: 32px; border-top: 1px solid #e2e8f0; padding-top: 16px; font-size: 12px; color: #64748b; }
    .print-btn-bar { text-align: center; margin-bottom: 20px; }
    .btn-print { background: #0284c7; color: #fff; font-size: 14px; font-weight: 600; padding: 8px 18px; border: none; border-radius: 6px; cursor: pointer; }
    @media print {
      .print-btn-bar { display: none; }
      body { padding: 0; background: #fff; }
      .invoice-card { border: none; box-shadow: none; padding: 0; }
    }
  </style>
</head>
<body>
  <div class="print-btn-bar">
    <button class="btn-print" onclick="window.print()">🖨️ Print / Save as PDF</button>
  </div>
  <div class="invoice-card">
    <div class="header-row">
      <div style="display: flex; align-items: center; gap: 16px;">
        <img src="/logo-mark.svg" alt="CNC Laser" style="width: 52px; height: 52px; border-radius: 8px; flex-shrink: 0;" />
        <div>
          <h1 class="shop-title">${e.shopName}</h1>
          <div class="shop-meta">
            <div>${e.shopAddress||(a?"MIDC Industrial Area, Bhosari, Pune, MH":"1420 Industrial Pkwy, Cleveland, OH 44135")}</div>
            <div>Phone: ${e.shopPhone||(a?"+91 98220 12345":"(216) 555-0198")} ${a?`| UPI: <strong>${g}</strong>`:""}</div>
            ${a?`<div>GSTIN: <strong>${e.shopGstin||"27AABCS1429B1Z8"}</strong> | State Code: 27 (Maharashtra)</div>`:`<div>NAICS: <strong>${e.naicsCode||"332813"}</strong> | Tax ID / EIN: <strong>${e.einOrTaxId||"Verified"}</strong></div>`}
          </div>
        </div>
      </div>
      <div class="invoice-tag">
        <h2 class="invoice-title">${a?"CONSOLIDATED TAX INVOICE":"PROJECT QUOTATION"}</h2>
        <div class="invoice-meta">
          <div>Project Ref: <strong>${i}</strong></div>
          <div>Date: <strong>${p}</strong></div>
          <div>${a?"SAC: <strong>9988</strong> | HSN: <strong>7326</strong>":`NAICS: <strong>${e.naicsCode?e.naicsCode.split(" ")[0]:"332813"}</strong> | Validity: <strong>15 Calendar Days</strong>`}</div>
        </div>
      </div>
    </div>

    <div class="bill-to-box">
      <strong>Customer:</strong> ${c.customerName||"Valued Customer"} ${c.customerPhone?`(${c.customerPhone})`:""} | 
      <strong>Project Name:</strong> ${c.projectName||"CNC Laser Fabrication Batch"} | 
      <em>Nesting: ${t.nestingResult.sheetsRequired} Sheet(s) of ${t.nestingResult.sheetSize.name.split(" - ")[0]} (${t.nestingResult.sheetUtilizationPercent}% yield)</em>
    </div>

    <table>
      <thead>
        <tr>
          <th class="text-center" style="width: 40px;">#</th>
          <th>Item Description & Dimensions</th>
          <th class="text-center">Mode</th>
          <th class="text-right">Qty</th>
          <th class="text-right">Unit Rate</th>
          <th class="text-right">Amount (${s})</th>
        </tr>
      </thead>
      <tbody>
        ${f}
      </tbody>
    </table>

    <div class="summary-grid">
      ${a?`
      <div class="upi-box">
        <div class="upi-title">Scan UPI QR to Pay Advance</div>
        <img src="${v}" alt="UPI QR Code" />
        <div class="upi-sub">Pay 50% Advance: <strong>${s}${n.toFixed(2)}</strong></div>
        <div class="upi-sub" style="margin-top: 4px; font-family: monospace;">${g}</div>
      </div>
      `:`
      <div class="terms-box">
        <div class="terms-title">Commercial & Remittance Terms</div>
        <div class="terms-item">Payment Terms: <strong>${e.paymentTerms||"Net 30, Credit Card, ACH"}</strong></div>
        <div class="terms-item">Tax Status: <strong>${e.salesTaxExempt?"Tax-Exempt (Resale Certificate Verified)":`Sales Tax (${e.gstPercent||7}%)`}</strong></div>
        <div class="terms-item">Lead Time: <strong>${e.leadTimeDays||3} to 5 Business Days ARO</strong></div>
        <div class="terms-item">Delivery: <strong>FOB Origin / Ex-Works</strong></div>
        <div class="terms-item">CAM Spec: <strong>Trumpf / SigmaNEST Cut-Ready DXF</strong></div>
      </div>
      `}

      <table class="totals-table">
        <tr>
          <td>Subtotal (${t.totalPartsCount} pcs):</td>
          <td class="text-right">${s}${t.subtotalBeforeDiscount.toFixed(2)}</td>
        </tr>
        ${t.volumeDiscountPercent>0?`
        <tr>
          <td style="color: #16a34a;">Volume Discount (${t.volumeDiscountPercent}%):</td>
          <td class="text-right" style="color: #16a34a;">-${s}${t.discountAmount.toFixed(2)}</td>
        </tr>`:""}
        <tr>
          <td>${a?"Taxable Value:":"Taxable Subtotal:"}</td>
          <td class="text-right">${s}${t.orderTotalBeforeGst.toFixed(2)}</td>
        </tr>
        ${a?e.isInterstateSale?`
        <tr>
          <td>Integrated GST (IGST 18%):</td>
          <td class="text-right">${s}${t.igstAmount.toFixed(2)}</td>
        </tr>`:`
        <tr>
          <td>Central GST (CGST 9%):</td>
          <td class="text-right">${s}${t.cgstAmount.toFixed(2)}</td>
        </tr>
        <tr>
          <td>State GST (SGST 9%):</td>
          <td class="text-right">${s}${t.sgstAmount.toFixed(2)}</td>
        </tr>`:e.salesTaxExempt?`
        <tr>
          <td>Sales Tax (Tax-Exempt):</td>
          <td class="text-right">$0.00</td>
        </tr>
        `:`
        <tr>
          <td>Estimated Sales Tax (${e.gstPercent||7}%):</td>
          <td class="text-right">${s}${t.gstAmount.toFixed(2)}</td>
        </tr>
        `}
        <tr class="total-row">
          <td>Total Project Amount:</td>
          <td class="text-right">${s}${t.finalTotalWithGst.toFixed(2)}</td>
        </tr>
      </table>
    </div>

    <div class="footer-terms">
      <strong>Terms & Conditions:</strong>
      <ol style="margin: 6px 0 0 18px; padding: 0;">
        ${a?`
        <li>50% advance along with confirmed PO to schedule machine table time. Balance before dispatch.</li>
        <li><strong>Rate Validity:</strong> Rates valid for 48 hours based on secondary steel market prices.</li>
        <li>Files exported directly to CypCut / FSCUT native CAM profiles. Inspection tolerance ±0.2 mm.</li>
        `:`
        <li>Quotation is valid for 15 days from issue date.</li>
        <li>Standard sheet metal cutting tolerance: ±0.005" to ±0.010" per ASTM standards.</li>
        <li>Parts produced strictly to confirmed electronic CAD/DXF data. Material certifications provided upon request.</li>
        <li>Payment terms Net 30 upon approved credit, or credit card prior to shipment.</li>
        `}
      </ol>
    </div>
  </div>
</body>
</html>`}function S(c,t){const a=c.shopSettings,s=`JOB-${Math.floor(1e5+Math.random()*9e5)}`,e=new Date().toLocaleDateString("en-IN",{day:"2-digit",month:"short",year:"numeric"});let i="";for(let p=0;p<c.items.length;p++){const g=c.items[p],d=g.partGeometry.boundingBox;i+=`
      <tr>
        <td class="text-center">${p+1}</td>
        <td><strong>${g.partGeometry.name}</strong></td>
        <td>${d.width.toFixed(0)} × ${d.height.toFixed(0)} mm</td>
        <td>${g.materialName} (${g.gaugeThicknessMm}mm)</td>
        <td class="text-right"><strong>${g.quantity} pcs</strong></td>
        <td>${(g.metrics.totalCutLengthMm/1e3).toFixed(1)} m / ${g.metrics.pierceCount*g.quantity} pts</td>
      </tr>
    `}return`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Shop Floor Multi-Part Job Card - ${s}</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; color: #1e293b; margin: 0; padding: 30px; background: #fff; line-height: 1.5; }
    .jobcard { max-width: 850px; margin: 0 auto; border: 2px solid #0f172a; border-radius: 6px; padding: 28px; }
    .header { display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #0f172a; padding-bottom: 16px; margin-bottom: 20px; }
    .title { font-size: 22px; font-weight: 800; text-transform: uppercase; margin: 0; color: #0f172a; }
    .meta { font-size: 13px; color: #475569; text-align: right; }
    .info-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 14px; margin-bottom: 20px; font-size: 13px; }
    .info-item strong { color: #0f172a; display: block; font-size: 11px; text-transform: uppercase; margin-bottom: 2px; }
    table { width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: 13px; }
    th { background: #0f172a; color: #fff; text-align: left; padding: 8px 10px; font-size: 12px; text-transform: uppercase; }
    td { padding: 8px 10px; border-bottom: 1px solid #cbd5e1; }
    .text-right { text-align: right; }
    .text-center { text-align: center; }
    .checklist { background: #fffbeb; border: 1px solid #fef3c7; border-radius: 6px; padding: 14px; margin-bottom: 20px; font-size: 12px; }
    .box-title { font-weight: 700; color: #92400e; margin-bottom: 8px; text-transform: uppercase; }
    .sign-row { display: flex; justify-content: space-between; margin-top: 30px; font-size: 12px; border-top: 1px solid #cbd5e1; padding-top: 14px; }
    @media print {
      .print-btn-bar { display: none; }
      body { padding: 0; }
      .jobcard { border: 2px solid #000; padding: 15px; }
    }
  </style>
</head>
<body>
  <div class="print-btn-bar" style="text-align: center; margin-bottom: 20px;">
    <button onclick="window.print()" style="background: #0f172a; color: #fff; padding: 8px 20px; border: none; border-radius: 6px; font-weight: 600; cursor: pointer;">🖨️ Print Job Card</button>
  </div>
  <div class="jobcard">
    <div class="header">
      <div>
        <h1 class="title">CNC LASER PROJECT CUTTING JOB CARD</h1>
        <div style="font-size: 13px; color: #64748b; font-weight: 600;">${a.shopName} | Laser Controller: CypCut / FSCUT</div>
      </div>
      <div class="meta">
        <div>Job Card No: <strong>${s}</strong></div>
        <div>Date: <strong>${e}</strong></div>
      </div>
    </div>

    <div class="info-grid">
      <div class="info-item"><strong>Customer / PO Ref</strong>${c.customerName||"Tata AutoComp"}</div>
      <div class="info-item"><strong>Project Assembly</strong>${c.projectName||"Skid Parts Batch"}</div>
      <div class="info-item"><strong>Total Parts Scheduled</strong>${t.totalPartsCount} pcs across ${t.totalItemsCount} shapes</div>
      <div class="info-item"><strong>Mill Sheet Size</strong>${t.nestingResult.sheetSize.name.split(" - ")[0]}</div>
      <div class="info-item"><strong>Sheets Required</strong>${t.nestingResult.sheetsRequired} Sheet(s) (${t.nestingResult.sheetUtilizationPercent}% yield)</div>
      <div class="info-item"><strong>Cut Length / Pierces</strong>${t.totalCutLengthMeters}m | ${t.totalPierces} pts</div>
    </div>

    <table>
      <thead>
        <tr>
          <th class="text-center">#</th>
          <th>Part Description</th>
          <th>Size (W × H)</th>
          <th>Material & Gauge</th>
          <th class="text-right">Batch Qty</th>
          <th>Cut Length / Pierces</th>
        </tr>
      </thead>
      <tbody>
        ${i}
      </tbody>
    </table>

    <div class="checklist">
      <div class="box-title">MACHINE OPERATOR CUT SEQUENCE CHECKLIST</div>
      <div>[ ] Sheet thickness measured and confirmed before gantry loading</div>
      <div>[ ] Laser beam focus centered (tape blast test verified)</div>
      <div>[ ] <strong>CUT SEQUENCE VERIFIED:</strong> All Layer 1 (Yellow) Inner Holes cut BEFORE Layer 0 (White) Outer Perimeter</div>
      <div>[ ] Remnant offcut saved to rack: ${t.nestingResult.remnantWidthMm} × ${t.nestingResult.remnantLengthMm} mm</div>
      <div>[ ] Finished parts count verified and tagged with job number: _____ pcs</div>
    </div>

    <div class="sign-row">
      <div>Laser Operator: ___________________</div>
      <div>Quality Inspector: ___________________</div>
      <div>Supervisor: ___________________</div>
    </div>
  </div>
</body>
</html>`}function T(c={}){const t=document.getElementById("demoVideoModal"),a=document.getElementById("btnOpenDemoModal"),s=document.getElementById("btnOpenJeepShowcase"),e=document.getElementById("demoThumbTrigger"),i=document.getElementById("closeDemoModalBtn"),p=document.getElementById("demoLocalVideo");if(!t)return;const g=t.querySelectorAll(".demo-modal-tab-btn"),d=t.querySelectorAll(".demo-tab-pane");function n(o){if(g.forEach(r=>{r.classList.toggle("active",r.dataset.demotab===o)}),d.forEach(r=>{const h=r.id.toLowerCase().includes(o.toLowerCase());r.classList.toggle("hidden",!h)}),o==="pdf"){const r=t?.querySelector(".demo-pdf-iframe");r&&!r.src&&r.dataset.src&&(r.src=r.dataset.src)}if(p)if(o==="video"){p.currentTime=0;const r=p.play();r!==void 0&&r.catch(()=>{p.muted=!0,p.play().catch(()=>{})})}else p.pause()}g.forEach(o=>{o.addEventListener("click",()=>{const r=o.dataset.demotab||"cad";n(r)})});const b=t.querySelectorAll(".demo-finish-swatch-btn"),v=document.getElementById("demoFinishJeepImg"),f=t.querySelectorAll(".demo-backlight-btn"),m=document.getElementById("demoBacklightGlow");b.forEach(o=>{o.addEventListener("click",()=>{b.forEach(h=>h.classList.remove("active")),o.classList.add("active");const r=o.dataset.demofinish||"matte_black";v&&(v.className=`demo-finish-jeep-img finish-${r.replace(/_/g,"-")}`)})}),f.forEach(o=>{o.addEventListener("click",()=>{f.forEach(h=>h.classList.remove("active")),o.classList.add("active");const r=o.dataset.demolight||"warm_white";m&&(r==="off"?m.style.opacity="0":r==="cool_white"?(m.style.opacity="1",m.style.background="radial-gradient(circle, rgba(147, 197, 253, 0.45) 0%, rgba(147, 197, 253, 0) 70%)"):r==="amber_gold"?(m.style.opacity="1",m.style.background="radial-gradient(circle, rgba(249, 115, 22, 0.5) 0%, rgba(249, 115, 22, 0) 70%)"):(m.style.opacity="1",m.style.background="radial-gradient(circle, rgba(251, 191, 36, 0.45) 0%, rgba(251, 191, 36, 0) 70%)"))})});function l(o="cad"){t.classList.remove("hidden"),n(o)}function x(){t.classList.add("hidden"),p&&p.pause()}a?.addEventListener("click",()=>l("cad")),s?.addEventListener("click",()=>l("cad")),e?.addEventListener("click",()=>l("cad")),i?.addEventListener("click",x);const y=document.getElementById("btnModalLoadJeepCad"),u=document.getElementById("btnModalDxfLoad");[y,u].forEach(o=>{o?.addEventListener("click",()=>{x(),c.onLoadJeepToCad&&c.onLoadJeepToCad()})}),t.addEventListener("click",o=>{o.target===t&&x()}),window.addEventListener("keydown",o=>{o.key==="Escape"&&!t.classList.contains("hidden")&&x()});try{const o=new URLSearchParams(window.location.search),r=window.location.hash.toLowerCase(),h=(o.get("demo")||o.get("play")||"").toLowerCase();h==="video"||h==="1"||h==="true"||r==="#video"||r==="#demo"?setTimeout(()=>{l("video")},400):(h==="cad"||h==="jeep"||r==="#cad")&&setTimeout(()=>{l("cad")},400)}catch{}return{openModal:l,closeModal:x,switchTab:n}}export{S as a,$ as b,C as c,_ as g,T as i};
