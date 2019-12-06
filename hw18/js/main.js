class Service {
  constructor() {
    this.url = 'http://localhost:3000';
  }

  getRequest() {
    return fetch(`${this.url}/invoice`)
      .then(response => response.json())
      .catch(error => console.error('error -', error));
  }
}

class Invoices {
  constructor() {
    this.service = new Service();
    this.layout = new LayoutInvoices();
    this.createInvoice = new CreateInvoice();
  }

  init() {
    this.service.getRequest().then(response => {
      this.layout.renderAll(response);
      this.getDeleteInvoice();
    });

    const btnAddInvoice = document.getElementById('invoice-add');
    const btnSaveInvoice = document.getElementById('invoice-save');
    const btnClose = document.querySelector('.close');

    btnAddInvoice.addEventListener('click', this.showModal);
    btnClose.addEventListener('click', this.showModal);
    btnSaveInvoice.addEventListener('click', this.getNewInvoice.bind(this));
  }

  getNewInvoice() {
    const form = document.querySelector('.invoice-form');
    const invoices = this.createInvoice.getInvoiceData();
    const data = `${this.layout.render(invoices)}`;
    let validate = this.createInvoice.validateForm();

    if (validate !== false) {
      this.layout.renderNewInvoice(data);
      this.showModal();
      this.getDeleteInvoice();
      form.reset();
    }
  }

  getDeleteInvoice() {
    const btnsDeleteInvoice = document.querySelectorAll('.invoice-delete');
    btnsDeleteInvoice.forEach(btn => {
      btn.addEventListener('click', deleteInvoice);
    });

    function deleteInvoice(event) {
      this.parentElement.closest('tr').remove();
    }
  }

  showModal() {
    const modal = document.querySelector('.invoice-modal');
    modal.classList.toggle('show');
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

  renderNewInvoice(invoice) {
    this.tableBody.insertAdjacentHTML('beforeend', invoice);
  }

  render(invoice) {
    return `<tr>
              <td class="date-created">${invoice.date_created}</td>
              <td class="number">${invoice.number}</td>
              <td class="date-supplied">${invoice.date_supplied}</td>
              <td class="comment">${invoice.comment}
                <button class="invoice-delete"></button>
              </td>
            </tr>`;
  }
}

class CreateInvoice {
  constructor() {
    this.invoiceNumber = document.getElementById('invoice-number');
    this.invoiceDate = document.getElementById('invoice-date');
    this.supplyDate = document.getElementById('supply-date');
    this.invoiceComment = document.getElementById('invoice-comment');
    this.errorMessage = document.querySelector('.error-message');
  }

  getInvoiceData() {
    const invoiceDateFormat = this.invoiceDate.value
      .split('-')
      .reverse()
      .join('-');

    const supplyDateFormat = this.supplyDate.value
      .split('-')
      .reverse()
      .join('-');

    const invoice = {
      number: this.invoiceNumber.value,
      date_created: invoiceDateFormat,
      date_supplied: supplyDateFormat,
      comment: this.invoiceComment.value
    };
    return invoice;
  }

  validateForm() {
    if (this.invoiceNumber.value.length < 3) {
      this.errorMessage.classList.add('error-show');
      return false;
    } else {
      this.errorMessage.classList.remove('error-show');
    }
  }
}

const invoice = new Invoices();
invoice.init();
