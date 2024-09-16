import '@sanity/client'

declare module '@sanity/client' {
  interface SanityQueries {
    'count(*[\n  _type == "post"\n  && defined(slug.current)\n  && (isFeatured != true || defined($category))\n  && select(defined($category) => $category in categories[]->slug.current, true)\n])': TOTAL_POSTS_QUERYResult
    // ... other query types ...
  }
}