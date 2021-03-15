import React from "react"
import styled from "styled-components"

export const CompanySelect = styled.select`
  background: #f1f5f8;
  border-radius: 0.25rem;
  border-color: transparent;
  padding: 0.25rem;
  float: left;
`
const SelectOption = ({ options, value, handleChange, id }) => {
  return (
    <div>
      <CompanySelect id={id} onChange={handleChange}>
        {options
          ? (options || []).map((opt) => (
              <option value={opt} key={opt}>
                {opt}
              </option>
            ))
          : null}
      </CompanySelect>
    </div>
  )
}

export default SelectOption
