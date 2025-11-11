function responsiveTables() {
  document.querySelectorAll('.nijmegen-html table').forEach((table) => {
    const ths = table.querySelectorAll('thead th');
    const headings = Array.from(ths).map((th) => th.textContent.trim());

    if (headings.length === 0) return;

    const tds = table.querySelectorAll('tbody td');
    tds.forEach((td, idx) => {
      td.setAttribute('data-label', headings[idx % headings.length]);
    });
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', responsiveTables);
} else {
  responsiveTables();
}
