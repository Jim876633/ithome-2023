

describe('Form Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/home/form')
  })

  it('未輸入任何資料，按下送出按鈕，顯示錯誤訊息', () => {
    cy.contains(/submit/i).click()
    cy.get('input ~ div').should('contain', '必填項目').should('have.length', 3)
  })

  it('輸入錯誤資料，按下送出按鈕，顯示錯誤訊息', () => {
    cy.get('input[name="firstName"]').type('testing')
    cy.get('input[name="lastName"]').type('testing ten word')
    cy.get('input[name="twId"').type('A123')
    cy.contains(/submit/i).click()
    cy.contains('不可大於 5 個字').should('have.length', 1)
    cy.contains('不可大於 10 個字').should('have.length', 1)
    cy.contains('身分證字號格式錯誤').should('have.length', 1)
  })

  it('輸入正確資料，按下送出按鈕，顯示正確訊息', () => {
    cy.get('input[name="firstName"]').type('test')
    cy.get('input[name="lastName"]').type('test')
    cy.get('input[name="twId"').type('A123456789')
    cy.contains(/submit/i).click()
    cy.on('window:alert', (message) => {
      expect(message).to.equal(JSON.stringify({
        firstName: 'test',
        lastName: 'test',
        twId: 'A123456789',
      }));
    });
  })
})