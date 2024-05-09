import LogisticApp from '.'

describe('Creation > Factory Method', () => {
  test('Logistic application: when the delivery should be made by road', () => {
    const logisticApp = new LogisticApp()
    logisticApp.deliveryBy = "road"
    expect(logisticApp.deliver()).toBe(">> execute delivery by land in a box")
  })
  test('Logistic application: when the delivery should be made by road', () => {
    const logisticApp = new LogisticApp()
    logisticApp.deliveryBy = "sea"
    expect(logisticApp.deliver()).toBe(">> execute delivery by sea in a container")
  })
})
