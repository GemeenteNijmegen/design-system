function responsiveTables() {
  document.querySelectorAll('.nijmegen-html table').forEach((table) => {
    // Get headings from thead th elements
    const ths = table.querySelectorAll('thead th');
    const headings = Array.from(ths).map((th) => th.textContent.trim());

    if (headings.length === 0) return;

    // Set data-title for each td in tbody
    const tds = table.querySelectorAll('tbody td');
    tds.forEach((td, idx) => {
      td.setAttribute('data-title', headings[idx % headings.length]);
    });
  });
}

responsiveTables();
