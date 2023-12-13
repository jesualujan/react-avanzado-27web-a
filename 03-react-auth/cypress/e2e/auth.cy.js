describe('Funcionalidad de login', () => {
  
  it('Mi aplicacion carga leyendo Home en /', () => {
    // AAA (ARRANGE, ACT, ASSERT)
    // 01 ARRANGE: SETUP DEL ESTADO INICIAL DE MI APLICACIÓN
    cy.visit('/')
    // 02 ACT: INTERACTUAR CON LA APLICACIÓN
    cy.get('h1').contains('Home') // 03 ASSERT: ESPERO ESTE RESULTADO
  })

  it('Probar el login como CUSTOMER ', () => {
    // INTERCEP LO USO PARA SABER CUANDO UNA LLAMADA A LA API
    // ES RESUELTA Y PUEDO ESPERARLA EN OTRO MOMENTO USANDO WAIT ('@login')
    cy.intercept('POST', 'http://localhost:3000/login').as('login') // le damos un nombre o un sobrenombre

    // 01. Arrange: Setup del estado de mi aplicación
    cy.visit('/login')
    // 02. Act: Interactuar con la aplicación
    // cy.get('input[name="email"]').type('drstrange@marvel.com')
    // cy.get('input[name="password"]').type('multiverso')
    // cy.get('button[type="submit"]').click()

    // 02. Act: Interactuar con la aplicación
    cy.doLogin('drstrange@marvel.com', 'multiverso')

    cy.wait('@login') // resuelve la petición y esperamos hasta que se resuelva la petición
    cy.get('h1').constains('Home')// 03. Assert: Espero un resultado
  })

  // hablar de los milisegundos que el tiempo a veces supera los 4000 milisegundos puede tirar error
  // y en cypress tenemos algo que se llama interceptors

  it('Cuando haga Logout como ADMIN me lleve a la página de Home', () => {
    cy.intercept('POST', 'http://localhost:3000/login').as('login')
    // 01. Arrange: Setup del estado de mi aplicación
    cy.visit('/login')

    // 02. Act: Interactuar con la aplicación
    // 02. Act: Interactuar con la aplicación
    // cy.get('input[name="email"]').type('drstrange@marvel.com')
    // cy.get('input[name="password"]').type('multiverso')
    // cy.get('button[type="submit"]').click()
    cy.doLogin('superman@dc.com', 'superman')

    cy.wait('@login')
    cy.get('nav > ul > li:last').click()

    cy.get('h1').contains('Please sign in') // 03. Assert: Espero un resultado
  })
})