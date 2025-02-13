import prisma from '../lib/prisma'

async function main() {
  try {
    // Test the connection by trying to create a contact
    const testContact = await prisma.contact.create({
      data: {
        name: 'Test User',
        email: 'test@example.com',
        subject: 'Test Connection',
        message: 'Testing Prisma connection'
      }
    })
    
    console.log('Connection successful!')
    console.log('Created test contact:', testContact)
    
    // Clean up the test data
    await prisma.contact.delete({
      where: { id: testContact.id }
    })
  } catch (error) {
    console.error('Error testing connection:', error)
  } finally {
    await prisma.$disconnect()
  }
}

main()