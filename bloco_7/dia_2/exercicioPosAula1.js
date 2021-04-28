const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },

    order: {
      pizza: {
        margherita: {
          amount: 1,
          price: 25,
        },

        pepperoni: {
          amount: 1,
          price: 20,
        }
      },

      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },

      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },

    payment: {
      total: 60,
    },

  };
  
  const customerInfo = (order) => {
    // Adicione abaixo as informações necessárias.
    const motogirl = order.order.delivery.deliveryPerson;
    const client = order.name;
    const clientPhone = order.phoneNumber;
    const street = order.address.street;
    const number = order.address.number;
    const apartment = order.address.apartment;
    const phrase = `Olá ${motogirl}, entrega para: ${client}, Telefone: ${clientPhone}, ${street}, Número: ${number}, AP: ${apartment}.`

    return phrase;
  }

  console.log(customerInfo(order));
  
  const orderModifier = (order) => {
    // Adicione abaixo as informações necessárias.
    const pizzas = Object.keys(order.order.pizza); 
    const newPayment = order.payment = '60';
    const newName = order.name = 'Luiz Silva';
    const cokeZero = order.order.drinks.coke.type;

    Object.assign(order, pizzas);

    const phraseClient = `Olá ${newName}, o total do seu pedido de ${pizzas} e ${cokeZero} é ${newPayment}.`;

    return phraseClient;
  
  };

  console.log(  );
  
  console.log(orderModifier(order));
