import { Component, OnInit } from "@angular/core";
import { BooksService } from "src/sdk/services/books.service";

@Component({
  selector: "app-home-search",
  templateUrl: "./home-search.component.html",
  styleUrls: ["./home-search.component.scss"],
})
export class HomeSearchComponent implements OnInit {
  constructor(private booksService: BooksService) {}
  searchValue = "";
  loading = false;
  bookResults = [];
  dummyData = {
    code: 200,
    message: "Successful",
    data: {
      query: "brene brown",
      "results-start": "1",
      "results-end": "20",
      "total-results": "219",
      source: "Goodreads",
      "query-time-seconds": "0.07",
      results: {
        work: [
          {
            id: { _: "19175758", type: "integer" },
            books_count: { _: "85", type: "integer" },
            ratings_count: { _: "114169", type: "integer" },
            text_reviews_count: { _: "8186", type: "integer" },
            original_publication_year: { _: "2012", type: "integer" },
            original_publication_month: { _: "12", type: "integer" },
            original_publication_day: { _: "21", type: "integer" },
            average_rating: "4.28",
            best_book: {
              type: "Book",
              id: { _: "13588356", type: "integer" },
              title:
                "Daring Greatly: How the Courage to Be Vulnerable Transforms the Way We Live, Love, Parent, and Lead",
              author: {
                id: { _: "162578", type: "integer" },
                name: "Brené Brown",
              },
              image_url:
                "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1337110319l/13588356._SX98_.jpg",
              small_image_url:
                "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1337110319l/13588356._SY75_.jpg",
            },
          },
          {
            id: { _: "7261277", type: "integer" },
            books_count: { _: "63", type: "integer" },
            ratings_count: { _: "97995", type: "integer" },
            text_reviews_count: { _: "6282", type: "integer" },
            original_publication_year: { _: "2010", type: "integer" },
            original_publication_month: { _: "8", type: "integer" },
            original_publication_day: { _: "27", type: "integer" },
            average_rating: "4.21",
            best_book: {
              type: "Book",
              id: { _: "7015403", type: "integer" },
              title: "The Gifts of Imperfection",
              author: {
                id: { _: "162578", type: "integer" },
                name: "Brené Brown",
              },
              image_url:
                "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1369092544l/7015403._SX98_.jpg",
              small_image_url:
                "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1369092544l/7015403._SX50_.jpg",
            },
          },
          {
            id: { _: "42872911", type: "integer" },
            books_count: { _: "44", type: "integer" },
            ratings_count: { _: "50283", type: "integer" },
            text_reviews_count: { _: "3627", type: "integer" },
            original_publication_year: { _: "2015", type: "integer" },
            original_publication_month: { _: "8", type: "integer" },
            original_publication_day: { _: "25", type: "integer" },
            average_rating: "4.25",
            best_book: {
              type: "Book",
              id: { _: "23317538", type: "integer" },
              title: "Rising Strong",
              author: {
                id: { _: "162578", type: "integer" },
                name: "Brené Brown",
              },
              image_url:
                "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1428641002l/23317538._SX98_.jpg",
              small_image_url:
                "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1428641002l/23317538._SX50_.jpg",
            },
          },
          {
            id: { _: "55699050", type: "integer" },
            books_count: { _: "36", type: "integer" },
            ratings_count: { _: "57816", type: "integer" },
            text_reviews_count: { _: "5173", type: "integer" },
            original_publication_year: { _: "2017", type: "integer" },
            original_publication_month: { _: "9", type: "integer" },
            original_publication_day: { _: "12", type: "integer" },
            average_rating: "4.16",
            best_book: {
              type: "Book",
              id: { _: "34565022", type: "integer" },
              title:
                "Braving the Wilderness: The Quest for True Belonging and the Courage to Stand Alone",
              author: {
                id: { _: "162578", type: "integer" },
                name: "Brené Brown",
              },
              image_url:
                "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1546075042l/34565022._SX98_.jpg",
              small_image_url:
                "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1546075042l/34565022._SY75_.jpg",
            },
          },
          {
            id: { _: "62183586", type: "integer" },
            books_count: { _: "24", type: "integer" },
            ratings_count: { _: "33823", type: "integer" },
            text_reviews_count: { _: "2744", type: "integer" },
            original_publication_year: { _: "2018", type: "integer" },
            original_publication_month: { _: "10", type: "integer" },
            original_publication_day: { _: "16", type: "integer" },
            average_rating: "4.18",
            best_book: {
              type: "Book",
              id: { _: "40109367", type: "integer" },
              title: "Dare to Lead",
              author: {
                id: { _: "162578", type: "integer" },
                name: "Brené Brown",
              },
              image_url:
                "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1541026732l/40109367._SX98_.jpg",
              small_image_url:
                "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1541026732l/40109367._SX50_.jpg",
            },
          },
          {
            id: { _: "43101666", type: "integer" },
            books_count: { _: "4", type: "integer" },
            ratings_count: { _: "13669", type: "integer" },
            text_reviews_count: { _: "1254", type: "integer" },
            original_publication_year: { _: "2013", type: "integer" },
            original_publication_month: { _: "4", type: "integer" },
            original_publication_day: { _: "11", type: "integer" },
            average_rating: "4.64",
            best_book: {
              type: "Book",
              id: { _: "23500254", type: "integer" },
              title:
                "The Power of Vulnerability: Teachings of Authenticity, Connections and Courage",
              author: {
                id: { _: "162578", type: "integer" },
                name: "Brené Brown",
              },
              image_url:
                "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1417188663l/23500254._SX98_.jpg",
              small_image_url:
                "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1417188663l/23500254._SX50_.jpg",
            },
          },
          {
            id: { _: "41771362", type: "integer" },
            books_count: { _: "1", type: "integer" },
            ratings_count: { _: "701", type: "integer" },
            text_reviews_count: { _: "65", type: "integer" },
            original_publication_year: { _: "2014", type: "integer" },
            original_publication_month: { _: "3", type: "integer" },
            original_publication_day: { _: "18", type: "integer" },
            average_rating: "4.18",
            best_book: {
              type: "Book",
              id: { _: "22363000", type: "integer" },
              title: "Summary: Daring Greatly: By Brene Brown",
              author: {
                id: { _: "676312", type: "integer" },
                name: "Omar Elbaga",
              },
              image_url:
                "https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png",
              small_image_url:
                "https://s.gr-assets.com/assets/nophoto/book/50x75-a91bf249278a81aabab721ef782c4a74.png",
            },
          },
          {
            id: { _: "2715197", type: "integer" },
            books_count: { _: "2", type: "integer" },
            ratings_count: { _: "14494", type: "integer" },
            text_reviews_count: { _: "1205", type: "integer" },
            original_publication_year: { _: "2007", type: "integer" },
            original_publication_month: { type: "integer", nil: "true" },
            original_publication_day: { type: "integer", nil: "true" },
            average_rating: "4.24",
            best_book: {
              type: "Book",
              id: { _: "279308", type: "integer" },
              title:
                "I Thought It Was Just Me: Women Reclaiming Power and Courage in a Culture of Shame",
              author: {
                id: { _: "162578", type: "integer" },
                name: "Brené Brown",
              },
              image_url:
                "https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png",
              small_image_url:
                "https://s.gr-assets.com/assets/nophoto/book/50x75-a91bf249278a81aabab721ef782c4a74.png",
            },
          },
          {
            id: { _: "25731720", type: "integer" },
            books_count: { _: "2", type: "integer" },
            ratings_count: { _: "3065", type: "integer" },
            text_reviews_count: { _: "306", type: "integer" },
            original_publication_year: { type: "integer", nil: "true" },
            original_publication_month: { type: "integer", nil: "true" },
            original_publication_day: { type: "integer", nil: "true" },
            average_rating: "4.56",
            best_book: {
              type: "Book",
              id: { _: "16291800", type: "integer" },
              title:
                "The Gifts of Imperfect Parenting: Raising Children with Courage, Compassion, and Connection",
              author: {
                id: { _: "162578", type: "integer" },
                name: "Brené Brown",
              },
              image_url:
                "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1390119190l/16291800._SX98_.jpg",
              small_image_url:
                "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1390119190l/16291800._SX50_.jpg",
            },
          },
          {
            id: { _: "21645419", type: "integer" },
            books_count: { _: "4", type: "integer" },
            ratings_count: { _: "1877", type: "integer" },
            text_reviews_count: { _: "173", type: "integer" },
            original_publication_year: { _: "2012", type: "integer" },
            original_publication_month: { _: "11", type: "integer" },
            original_publication_day: { _: "15", type: "integer" },
            average_rating: "4.50",
            best_book: {
              type: "Book",
              id: { _: "15894631", type: "integer" },
              title:
                "Men, Women, and Worthiness: The Experience of Shame and the Power of Being Enough",
              author: {
                id: { _: "162578", type: "integer" },
                name: "Brené Brown",
              },
              image_url:
                "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1356166554l/15894631._SX98_.jpg",
              small_image_url:
                "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1356166554l/15894631._SX50_.jpg",
            },
          },
          {
            id: { _: "44748964", type: "integer" },
            books_count: { _: "1", type: "integer" },
            ratings_count: { _: "14", type: "integer" },
            text_reviews_count: { _: "0", type: "integer" },
            original_publication_year: { _: "2015", type: "integer" },
            original_publication_month: { _: "3", type: "integer" },
            original_publication_day: { _: "2", type: "integer" },
            average_rating: "4.50",
            best_book: {
              type: "Book",
              id: { _: "25064925", type: "integer" },
              title: "Brene Brown: Brene Brown, 70 Greatest Life Lessons",
              author: {
                id: { _: "13509323", type: "integer" },
                name: "Joy Kipling",
              },
              image_url:
                "https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png",
              small_image_url:
                "https://s.gr-assets.com/assets/nophoto/book/50x75-a91bf249278a81aabab721ef782c4a74.png",
            },
          },
          {
            id: { _: "41618646", type: "integer" },
            books_count: { _: "4", type: "integer" },
            ratings_count: { _: "224", type: "integer" },
            text_reviews_count: { _: "13", type: "integer" },
            original_publication_year: { _: "2014", type: "integer" },
            original_publication_month: { _: "5", type: "integer" },
            original_publication_day: { _: "1", type: "integer" },
            average_rating: "4.39",
            best_book: {
              type: "Book",
              id: { _: "22243748", type: "integer" },
              title:
                "The Gifts of Imperfection by Brene Brown - A 30-Minute Instaread Summary: Let Go of Who You Think You're Supposed to Be and Embrace Who You Are",
              author: {
                id: { _: "7417162", type: "integer" },
                name: "Instaread Summaries",
              },
              image_url:
                "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1400882087l/22243748._SX98_.jpg",
              small_image_url:
                "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1400882087l/22243748._SX50_.jpg",
            },
          },
          {
            id: { _: "47824467", type: "integer" },
            books_count: { _: "21", type: "integer" },
            ratings_count: { _: "39977", type: "integer" },
            text_reviews_count: { _: "3291", type: "integer" },
            original_publication_year: { _: "2016", type: "integer" },
            original_publication_month: { _: "8", type: "integer" },
            original_publication_day: { _: "9", type: "integer" },
            average_rating: "3.85",
            best_book: {
              type: "Book",
              id: { _: "27840585", type: "integer" },
              title:
                "Present Over Perfect: Leaving Behind Frantic for a Simpler, More Soulful Way of Living",
              author: {
                id: { _: "425914", type: "integer" },
                name: "Shauna Niequist",
              },
              image_url:
                "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1460248233l/27840585._SX98_.jpg",
              small_image_url:
                "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1460248233l/27840585._SY75_.jpg",
            },
          },
          {
            id: { _: "56912139", type: "integer" },
            books_count: { _: "3", type: "integer" },
            ratings_count: { _: "2562", type: "integer" },
            text_reviews_count: { _: "253", type: "integer" },
            original_publication_year: { type: "integer", nil: "true" },
            original_publication_month: { type: "integer", nil: "true" },
            original_publication_day: { type: "integer", nil: "true" },
            average_rating: "4.50",
            best_book: {
              type: "Book",
              id: { _: "28862373", type: "integer" },
              title: "Rising Strong as a Spiritual Practice",
              author: {
                id: { _: "162578", type: "integer" },
                name: "Brené Brown",
              },
              image_url:
                "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1466990112l/28862373._SX98_.jpg",
              small_image_url:
                "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1466990112l/28862373._SX50_.jpg",
            },
          },
          {
            id: { _: "25167302", type: "integer" },
            books_count: { _: "3", type: "integer" },
            ratings_count: { _: "74", type: "integer" },
            text_reviews_count: { _: "4", type: "integer" },
            original_publication_year: { _: "2013", type: "integer" },
            original_publication_month: { _: "4", type: "integer" },
            original_publication_day: { _: "23", type: "integer" },
            average_rating: "4.18",
            best_book: {
              type: "Book",
              id: { _: "17950732", type: "integer" },
              title:
                "Daring Greatly in 30 Minutes - The Expert Guide to Brene Brown's Critically Acclaimed Book",
              author: {
                id: { _: "7054200", type: "integer" },
                name: "The 30 Minute Expert Series",
              },
              image_url:
                "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1369157981l/17950732._SX98_.jpg",
              small_image_url:
                "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1369157981l/17950732._SX50_.jpg",
            },
          },
          {
            id: { _: "39928460", type: "integer" },
            books_count: { _: "1", type: "integer" },
            ratings_count: { _: "43", type: "integer" },
            text_reviews_count: { _: "0", type: "integer" },
            original_publication_year: { _: "2014", type: "integer" },
            original_publication_month: { _: "1", type: "integer" },
            original_publication_day: { _: "24", type: "integer" },
            average_rating: "3.95",
            best_book: {
              type: "Book",
              id: { _: "20638567", type: "integer" },
              title:
                "The Essential Self-Help Guide Stress and Anxiety Relief: How to Overcome Anxiety, Stress and Worry for Stress-Free Living Forever",
              author: {
                id: { _: "17134098", type: "integer" },
                name: "Brene  Brown",
              },
              image_url:
                "https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png",
              small_image_url:
                "https://s.gr-assets.com/assets/nophoto/book/50x75-a91bf249278a81aabab721ef782c4a74.png",
            },
          },
          {
            id: { _: "16613157", type: "integer" },
            books_count: { _: "1", type: "integer" },
            ratings_count: { _: "166", type: "integer" },
            text_reviews_count: { _: "6", type: "integer" },
            original_publication_year: { _: "2004", type: "integer" },
            original_publication_month: { _: "1", type: "integer" },
            original_publication_day: { _: "1", type: "integer" },
            average_rating: "3.98",
            best_book: {
              type: "Book",
              id: { _: "461412", type: "integer" },
              title:
                "Women & Shame: Reaching Out, Speaking Truths and Building Connection",
              author: {
                id: { _: "162578", type: "integer" },
                name: "Brené Brown",
              },
              image_url:
                "https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png",
              small_image_url:
                "https://s.gr-assets.com/assets/nophoto/book/50x75-a91bf249278a81aabab721ef782c4a74.png",
            },
          },
          {
            id: { _: "56563440", type: "integer" },
            books_count: { _: "2", type: "integer" },
            ratings_count: { _: "52", type: "integer" },
            text_reviews_count: { _: "4", type: "integer" },
            original_publication_year: { type: "integer", nil: "true" },
            original_publication_month: { type: "integer", nil: "true" },
            original_publication_day: { type: "integer", nil: "true" },
            average_rating: "4.27",
            best_book: {
              type: "Book",
              id: { _: "35220735", type: "integer" },
              title: "Summary: The Gifts of Imperfection: By Brene Brown",
              author: {
                id: { _: "16824139", type: "integer" },
                name: "Readtrepreneur Publishing",
              },
              image_url:
                "https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png",
              small_image_url:
                "https://s.gr-assets.com/assets/nophoto/book/50x75-a91bf249278a81aabab721ef782c4a74.png",
            },
          },
          {
            id: { _: "66653288", type: "integer" },
            books_count: { _: "1", type: "integer" },
            ratings_count: { _: "16", type: "integer" },
            text_reviews_count: { _: "1", type: "integer" },
            original_publication_year: { type: "integer", nil: "true" },
            original_publication_month: { type: "integer", nil: "true" },
            original_publication_day: { type: "integer", nil: "true" },
            average_rating: "4.00",
            best_book: {
              type: "Book",
              id: { _: "42867988", type: "integer" },
              title:
                "Summary of Dare To Lead By Brené Brown: Complete Study Guide With Key Ideas In One Hour or Less",
              author: {
                id: { _: "18633654", type: "integer" },
                name: "Speedy Books",
              },
              image_url:
                "https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png",
              small_image_url:
                "https://s.gr-assets.com/assets/nophoto/book/50x75-a91bf249278a81aabab721ef782c4a74.png",
            },
          },
          {
            id: { _: "18547119", type: "integer" },
            books_count: { _: "1", type: "integer" },
            ratings_count: { _: "60", type: "integer" },
            text_reviews_count: { _: "3", type: "integer" },
            original_publication_year: { _: "2009", type: "integer" },
            original_publication_month: { _: "1", type: "integer" },
            original_publication_day: { _: "1", type: "integer" },
            average_rating: "4.17",
            best_book: {
              type: "Book",
              id: { _: "13338294", type: "integer" },
              title:
                "Connections: A 12-Session Psychoeducational Shame-Resilience Curriculum",
              author: {
                id: { _: "162578", type: "integer" },
                name: "Brené Brown",
              },
              image_url:
                "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1370441081l/13338294._SX98_.jpg",
              small_image_url:
                "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1370441081l/13338294._SX50_.jpg",
            },
          },
        ],
      },
    },
  };

  ngOnInit(): void {
    this.applySearch();
  }
  applySearch() {
    console.log("apply search!");
    this.loading = true;
    this.booksService.findBookByTitle(this.searchValue).subscribe(
      (response) => {
        console.log("response->", response);

        this.loading = false;
        const work = response?.data?.results?.work || [];
        this.bookResults = work;
        console.log("bookResults->", this.bookResults);
      },
      (error) => {
        console.log("error", error);
        const work = this.dummyData?.data?.results?.work || [];
        this.bookResults = work;
        this.loading = false;
      }
    );
  }
  inputEnter() {
    console.log("a");
    this.applySearch();
  }
  onBack() {
    console.log("a");
  }
}
