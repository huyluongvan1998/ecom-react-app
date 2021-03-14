import styled from "styled-components";


export const Container = styled.div`
    min-height: calc(80vh - 10rem);
`

export const GridContainer = styled.div`
    grid-template-columns: 200px 1fr;
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
`

export const SideBarContainer = styled.section``

export const SideBar = styled.div`
    position: sticky;
    top: 1rem;
`