import { connect } from 'react-redux'
import { filterChanged } from '../actions/filter'
import { FormattedNumber } from 'react-intl'
import PropTypes from 'prop-types'
import React from 'react'

export const AggregationItem = ( { item, fieldName, active, onClick } ) => {
  const key = item.key.label || item.key
  const value = item.value || key
  const liStyle = 'layout-row m-form-field m-form-field__checkbox'
  const id = fieldName + key.replace( ' ', '' )

  return (
        <li className={liStyle}>
            <input type="checkbox" className="flex-fixed a-checkbox"
                   aria-label={key}
                   checked={active}
                   id={id}
                   onChange={onClick}
            />
            <label className="a-label flex-all bucket-key body-copy"
                   htmlFor={id}>
              {value}
            </label>
            {/* <span className="flex-fixed bucket-count">
              <FormattedNumber value={item.doc_count} />
            </span> */}
        </li>
  )
}

AggregationItem.propTypes = {
  active: PropTypes.bool,
  fieldName: PropTypes.string.isRequired,
  item: PropTypes.shape( {
    // eslint-disable-next-line camelcase
    doc_count: PropTypes.number.isRequired,
    value: PropTypes.string
  } ).isRequired,
  onClick: PropTypes.func.isRequired
}

AggregationItem.defaultProps = {
  active: false
}

export const mapStateToProps = ( state, ownProps ) => {
  const field = state.query[ownProps.fieldName]
  const value = ownProps.item.key
  const active = typeof field !== 'undefined' && field.indexOf( value ) > -1
  return { active }
}

export const mapDispatchToProps = ( dispatch, ownProps ) => ( {
  onClick: () => {
    dispatch( filterChanged( ownProps.fieldName, ownProps.item ) )
  }
} )

const AggregationItemFilter = connect(
  mapStateToProps,
  mapDispatchToProps
)( AggregationItem )

export default AggregationItemFilter
