import AWSDatabase from '.'

describe('AWSDatabase singleton pattern', () => {
  test('When the instance is created, all subsequent instances will have the same reference', () => {
    // Initial instance
    const database1 = AWSDatabase.getInstance()
    database1.setId("abc123")
    expect(database1.getId()).toBe("abc123")

    // The new instance `database2` will have the same reference of `database1`
    const database2 = AWSDatabase.getInstance()
    expect(database2.getId()).toBe("abc123")

    // The new instance `database3` will have the same reference of `database1`
    const database3 = AWSDatabase.getInstance()
    expect(database3.getId()).toBe("abc123")

    // Lets modify the id on any instance
    database2.setId("xyz123")

    // All instances are affected since all point the same instance
    expect(database1.getId()).toBe("xyz123")
    expect(database2.getId()).toBe("xyz123")
    expect(database3.getId()).toBe("xyz123")
  })
})
