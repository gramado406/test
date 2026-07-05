module.exports.SEASON_QUERY = `

query ($season: MediaSeason,$seasonYear: Int,$page:Int,$perPage:Int){

 Page(page:$page,perPage:$perPage){

  media(

   season:$season

   seasonYear:$seasonYear

   type:ANIME

   sort:POPULARITY_DESC

  ){

   id

   idMal

   title{

    romaji

    english

    native

   }

   description(asHtml:false)

   coverImage{

    extraLarge

    large

   }

   bannerImage

   genres

   episodes

   status

   season

   seasonYear

   averageScore

   popularity

   format

  }

 }

}

`;
