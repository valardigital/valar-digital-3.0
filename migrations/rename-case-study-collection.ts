import { getPayload } from 'payload'
import configPromise from '@payload-config'

export default async function checkCaseStudyCollection() {
  const payload = await getPayload({ config: configPromise })
  
  try {
    console.log('🔄 Checking case study collection status...')
    
    // Check if caseStudy collection exists and has data
    const collection = await payload.find({
      collection: 'caseStudy',
      limit: 1,
      depth: 0,
    })
    
    console.log(`📊 Found ${collection.totalDocs} documents in 'caseStudy' collection`)
    
    if (collection.totalDocs > 0) {
      console.log('✅ Case studies are available and should display on /case-studies page')
      console.log('📝 Note: Collection name is "caseStudy" but URLs use "/case-studies/" for SEO')
    } else {
      console.log('⚠️  No case studies found in the collection')
    }
    
  } catch (error) {
    console.error('❌ Error checking case study collection:', error)
  }
}
