class Service {
  constructor() {
    this.url = 'http://localhost:3000';
  }

  sendRequest() {
    return fetch(`${this.url}/invoice`)
      .then(response => response.json())
      .catch(error => console.error('error -', error));
  }
}

class Invoices {
  constructor() {
    this.service = new Service();
    this.layout = new LayoutInvoices();
  }

  init() {
    this.service.sendRequest().then(response => {
      this.layout.renderAll(response);
    });
  }
}

class LayoutInvoices {
  constructor() {
    this.service = new Service();
    this.tableBody = document.querySelector('.invoice-table tbody');
  }

  renderAll(invoiceList) {
    invoiceList.forEach(invoice => {
      const html = this.render(invoice);
      this.tableBody.insertAdjacentHTML('beforeend', html);
    });
  }

  render(invoice) {
    return `<tr>
              <td>${invoice.date_created}</td>
              <td>${invoice.number}</td>
              <td>${invoice.date_supplied}</td>
              <td>${invoice.comment}</td>
            </tr>`;
  }
}

const invoice = new Invoices();
invoice.init();
