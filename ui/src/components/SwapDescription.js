import React from 'react'
import arrowsIcon from '../assets/images/transfer-modal/icon-arrows@2x.png'
import numeral from 'numeral'

export const SwapDescription = ({
  onSwap,
  onCancel,
  onInputChange,
  networkTitle,
  fromCurrency,
  toCurrency,
  fromAmount,
  toAmount,
  isToken
}) => {
  const formattedFromBalance = isNaN(numeral(fromAmount).format('0.00', Math.floor))
    ? numeral(0).format('0,0.00', Math.floor)
    : numeral(fromAmount).format('0,0.000', Math.floor)
  const formattedToBalance = isNaN(numeral(toAmount).format('0.00', Math.floor))
    ? numeral(0).format('0,0.00', Math.floor)
    : numeral(toAmount).format('0,0.000', Math.floor)

  return (
    <div className="description-alert">
      <div className="image-container">
        <img className="arrows-icon" src={arrowsIcon} alt="swap icon" />
      </div>
      <div className="alert-container">
        <p className="transfer-description" data-testid="transfer-description">
          <strong>Swap Instruction</strong>
          <br />
          ERE20 token is a medium for inter-chain transfer.
          <br />
          {isToken ? 'To transfer between chains, ERE tokens must be swapped with ERE20 token.' : 'To complete the chain-to-chain transfer, ERE20 token must be swapped with the ERE token.'}
        </p>
        <p className="details-data-container">
          <span className="details-label">
            Your {networkTitle} {fromCurrency} Balance
          </span>
          <span className="details-description-black">
            {formattedFromBalance}
          </span>
        </p>
        <p className="details-data-container">
          <span className="details-label">
            Your {networkTitle} {toCurrency} Balance
          </span>
          <span className="details-description-black">
            {formattedToBalance}
          </span>
        </p>
        <form className="bridge-form" onSubmit={onSwap} autoComplete="off">
          <div className="swap-field-container">
            <input
              onChange={onInputChange}
              name="swapAmount"
              pattern="[0-9]+([.][0-9]{1,18})?"
              type="text"
              className="swap-field"
              id="swapAmount"
              placeholder={`Enter the amount of ${fromCurrency} to swap`}
            />
          </div>
          <div className="transfer-buttons">
            <button className="transfer-confirm" type="submit">
              Swap
            </button>
            <button className="transfer-cancel" onClick={onCancel}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
