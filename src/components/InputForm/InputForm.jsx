import React from 'react';

class InputForm extends React.Component {
  state = {
    contacts: [],
    name: '',
  };
  render() {
    return (
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    );
  }
}
export default InputForm;
