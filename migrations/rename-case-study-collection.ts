import { getPayload } from 'payload'
import configPromise from '@payload-config'

export default async function renameCaseStudyCollection() {
  const payload = await getPayload({ config: configPromise })
  
  try {
    console.log('🔄 Starting case study collection rename migration...')
    
    // Check if old collection exists
    const oldCollection = await payload.find({
      collection: 'caseStudy',
      limit: 1,
      depth: 0,
    })
    
    if (oldCollection.docs.length > 0) {
      console.log(`📊 Found ${oldCollection.totalDocs} documents in old 'caseStudy' collection`)
      console.log('⚠️  Manual database migration required:')
      console.log('   1. Connect to your MongoDB database')
      console.log('   2. Rename the collection from "caseStudy" to "case-studies"')
      console.log('   3. Or copy all documents from "caseStudy" to "case-studies"')
      console.log('')
      console.log('   MongoDB commands:')
      console.log('   db.caseStudy.renameCollection("case-studies")')
      console.log('   OR')
      console.log('   db.caseStudy.find().forEach(function(doc) { db["case-studies"].insertOne(doc); });')
    } else {
      console.log('✅ No documents found in old collection - migration not needed')
    }
    
    // Check if new collection exists
    const newCollection = await payload.find({
      collection: 'case-studies',
      limit: 1,
      depth: 0,
    })
    
    console.log(`📊 Found ${newCollection.totalDocs} documents in new 'case-studies' collection`)
    
  } catch (error) {
    console.error('❌ Error during migration check:', error)
  }
}
