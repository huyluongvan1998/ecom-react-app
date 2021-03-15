import styled from "styled-components"

const StyledButton = styled.button`
  text-transform: uppercase;
  background: #ab7a5f;
  color: #eaded7;
  padding: 0.375rem 0.75rem;
  letter-spacing: 0.1rem;
  display: inline-block;
  font-weight: 400;
  transition: all 0.3s linear;
  font-size: 0.875rem;
  cursor: pointer;
  box-shadow: 0 1px 3px rgb(0 0 0 / 20%);
  border-radius: 0.25rem;
  border-color: transparent;
`

export const SearchCategoryButton = styled.button`
  display: block;
  margin: 0.25em 0px;
  padding: 0.25rem 0px;
  text-transform: capitalize;
  background: transparent;
  border-top: none;
  border-right: none;
  border-left: none;
  border-image: initial;
  border-bottom: 1px solid transparent;
  letter-spacing: 0.1rem;
  color: #617d98;
  cursor: pointer;
`

export default StyledButton

export const SearchButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.5rem;
`
export const StyledSearchButton = styled(SearchButton)`
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background: rgb(34, 34, 34);
  margin-right: 0.5rem;
  border: none;
  cursor: pointer;
  opacity: 0.5;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => (props.color !== "All" ? props.color : "#fff")};
`
export const ResetFilterButton = styled(SearchCategoryButton)`
  background: #bb2525;
  color: #fff;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
`
