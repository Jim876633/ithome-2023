
describe('API Page', () => {

  beforeEach(() => {
    cy.visit('http://localhost:5173/home/itemList')
  })

  it('顯示正確的初始項目', () => {
    cy.get('li').should('have.length', 3)
    cy.get('li').eq(0).should('contain', 'test1')
    cy.get('li').eq(1).should('contain', 'test2')
    cy.get('li').eq(2).should('contain', 'test3')
  })

  it('新增「test4」文字，顯示正確結果', () => {
    cy.get('input').type('test4')
    cy.contains(/add/i).click()
    cy.get('li').should('have.length', 4)
    cy.get('li').eq(3).should('contain', 'test4')
  })

  it('刪除「test1」文字，顯示正確結果', () => {
    cy.contains(/delete/i).eq(0).click()
    cy.get('li').should('have.length', 2)
    cy.get('li').eq(0).should('contain', 'test2')
    cy.get('li').eq(1).should('contain', 'test3')
  })
})