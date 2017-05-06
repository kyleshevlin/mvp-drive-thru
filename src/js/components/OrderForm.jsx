import React from 'react'
import PropTypes from 'prop-types'
import { RadioGroup, Radio } from 'react-radio-group'
import { CheckboxGroup, Checkbox } from 'react-checkbox-group'
import menu from '../constants/menu'

const OrderForm = ({
  order,
  onSubmit,
  onCheckboxChange,
  onBunChange,
  onPattyChange,
  onCheeseChange,
  onCondimentsChange,
  onDrinkChange,
  formSubmitValue = 'Submit',
  submitIsDisabled = false
}) => {
  const {
    havingBurger,
    burger,
    havingFries,
    havingDrink,
    drink
  } = order

  return (
    <form className='order_form' onSubmit={onSubmit}>
      <div className='burger_inputs'>
        <div className='input-wrap'>
          <label htmlFor='havingBurger'>Burger?</label>
          <input
            type='checkbox'
            name='havingBurger'
            checked={havingBurger}
            onChange={onCheckboxChange}
          />
        </div>
        {havingBurger ? (
          <div className='burger_inputs-options'>
            <RadioGroup
              className='burger_inputs-options-row'
              name='buns'
              selectedValue={burger.bun}
              onChange={onBunChange}
            >
              {menu.buns.map(item => (
                <label key={item}><Radio value={item} />{item}</label>
              ))}
            </RadioGroup>

            <RadioGroup
              className='burger_inputs-options-row'
              name='patties'
              selectedValue={burger.patty}
              onChange={onPattyChange}
            >
              {menu.patties.map(item => (
                <label key={item}><Radio value={item} />{item}</label>
              ))}
            </RadioGroup>

            <RadioGroup
              className='burger_inputs-options-row'
              name='cheeses'
              selectedValue={burger.cheese}
              onChange={onCheeseChange}
            >
              {menu.cheeses.map(item => (
                <label key={item}><Radio value={item} />{item}</label>
              ))}
            </RadioGroup>

            <CheckboxGroup
              className='burger_inputs-options-row'
              name='condiments'
              value={burger.condiments}
              onChange={onCondimentsChange}
            >
              {menu.condiments.map(item => (
                <label key={item}><Checkbox value={item} />{item}</label>
              ))}
            </CheckboxGroup>
          </div>
        ) : null}
      </div>

      <div className='input-wrap'>
        <label htmlFor='havingFries'>Fries?</label>
        <input
          type='checkbox'
          name='havingFries'
          checked={havingFries}
          onChange={onCheckboxChange}
        />
      </div>

      <div className='drink_inputs'>
        <div className='input-wrap'>
          <label htmlFor='havingDrink'>Drink?</label>
          <input
            type='checkbox'
            name='havingDrink'
            checked={havingDrink}
            onChange={onCheckboxChange}
          />
        </div>
        {havingDrink ? (
          <RadioGroup
            className='drink_inputs-options'
            name='drinks'
            selectedValue={drink}
            onChange={onDrinkChange}
          >
            {menu.drinks.map(item => (
              <label key={item}><Radio value={item} />{item}</label>
            ))}
          </RadioGroup>
        ) : null }
      </div>

      <input
        className='btn'
        type='submit'
        value={formSubmitValue}
        disabled={submitIsDisabled}
      />
    </form>
  )
}

OrderForm.propTypes = {
  order: PropTypes.object,
  onSubmit: PropTypes.func,
  onCheckboxChange: PropTypes.func,
  onBunChange: PropTypes.func,
  onPattyChange: PropTypes.func,
  onCheeseChange: PropTypes.func,
  onCondimentsChange: PropTypes.func,
  onDrinkChange: PropTypes.func,
  formSubmitValue: PropTypes.string,
  submitIsDisabled: PropTypes.bool
}

export default OrderForm
