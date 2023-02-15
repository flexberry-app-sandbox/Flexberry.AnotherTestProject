export default {
  projections: {
    InvoiceE: {
      saleDate: {
        __caption__: 'Sale date'
      },
      client: {
        __caption__: 'Client',
        name: {
          __caption__: 'Name'
        }
      },
      invoiceItem: {
        __caption__: 'Invoice item',
        amount: {
          __caption__: 'Amount'
        },
        product: {
          __caption__: 'Product',
          name: {
            __caption__: 'Name'
          }
        }
      }
    },
    InvoiceL: {
      saleDate: {
        __caption__: 'Sale date'
      },
      client: {
        __caption__: 'Name',
        name: {
          __caption__: 'Name'
        }
      }
    }
  },
  validations: {
    saleDate: {
      __caption__: 'Sale date'
    },
    client: {
      __caption__: 'Client'
    },
    invoiceItem: {
      __caption__: 'Invoice item'
    }
  }
};
