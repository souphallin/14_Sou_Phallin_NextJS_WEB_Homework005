import Link from "next/link";

export default async function CardBookCategoryDetailComponent() {
  return (
    <>
      <div className="relative h-[1200px]">
        <div className="">
          <div className="flex gap-3 items-center">
            <div className="flex gap-2 items-center">
              <svg
                width="20"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.79 22.75H6.21C3.47 22.75 1.25 20.52 1.25 17.78V10.37C1.25 9.00997 2.09 7.29997 3.17 6.45997L8.56 2.25997C10.18 0.999974 12.77 0.939974 14.45 2.11997L20.63 6.44997C21.82 7.27997 22.75 9.05997 22.75 10.51V17.79C22.75 20.52 20.53 22.75 17.79 22.75ZM9.48 3.43997L4.09 7.63997C3.38 8.19997 2.75 9.46997 2.75 10.37V17.78C2.75 19.69 4.3 21.25 6.21 21.25H17.79C19.7 21.25 21.25 19.7 21.25 17.79V10.51C21.25 9.54997 20.56 8.21997 19.77 7.67997L13.59 3.34997C12.45 2.54997 10.57 2.58997 9.48 3.43997Z"
                  fill="#0B3954"
                />
                <path
                  d="M12 18.75C11.59 18.75 11.25 18.41 11.25 18V15C11.25 14.59 11.59 14.25 12 14.25C12.41 14.25 12.75 14.59 12.75 15V18C12.75 18.41 12.41 18.75 12 18.75Z"
                  fill="#0B3954"
                />
              </svg>
              <h4 className="text-[#0B3954] font-semibold text-base">Black Monster</h4>
            </div>

            <svg width="9" height="18" viewBox="0 0 9 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.91 17.67C0.72 17.67 0.53 17.6 0.38 17.45C0.0900004 17.16 0.0900004 16.68 0.38 16.39L6.9 9.87002C7.38 9.39002 7.38 8.61002 6.9 8.13002L0.38 1.61002C0.0900004 1.32002 0.0900004 0.84002 0.38 0.55002C0.67 0.26002 1.15 0.26002 1.44 0.55002L7.96 7.07002C8.47 7.58002 8.76 8.27002 8.76 9.00002C8.76 9.73002 8.48 10.42 7.96 10.93L1.44 17.45C1.29 17.59 1.1 17.67 0.91 17.67Z" fill="#0B3954"/>
            </svg>

            <div className="flex gap-2 items-center">
              <svg width="20" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.5 18V7C3.5 3 4.5 2 8.5 2H15.5C19.5 2 20.5 3 20.5 7V17C20.5 17.14 20.5 17.28 20.49 17.42" stroke="#0B3954" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M6.35 15H20.5V18.5C20.5 20.43 18.93 22 17 22H7C5.07 22 3.5 20.43 3.5 18.5V17.85C3.5 16.28 4.78 15 6.35 15Z" stroke="#0B3954" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8 7H16" stroke="#0B3954" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8 10.5H13" stroke="#0B3954" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <h4 className="text-[#0B3954] font-semibold text-base">Book Categories</h4>
            </div>

            <svg width="9" height="18" viewBox="0 0 9 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.91 17.67C0.72 17.67 0.53 17.6 0.38 17.45C0.0900004 17.16 0.0900004 16.68 0.38 16.39L6.9 9.87002C7.38 9.39002 7.38 8.61002 6.9 8.13002L0.38 1.61002C0.0900004 1.32002 0.0900004 0.84002 0.38 0.55002C0.67 0.26002 1.15 0.26002 1.44 0.55002L7.96 7.07002C8.47 7.58002 8.76 8.27002 8.76 9.00002C8.76 9.73002 8.48 10.42 7.96 10.93L1.44 17.45C1.29 17.59 1.1 17.67 0.91 17.67Z" fill="#0B3954"/>
            </svg>

            <div className="flex gap-2 items-center">
              <svg width="20" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.5 18V7C3.5 3 4.5 2 8.5 2H15.5C19.5 2 20.5 3 20.5 7V17C20.5 17.14 20.5 17.28 20.49 17.42" stroke="#0B3954" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M6.35 15H20.5V18.5C20.5 20.43 18.93 22 17 22H7C5.07 22 3.5 20.43 3.5 18.5V17.85C3.5 16.28 4.78 15 6.35 15Z" stroke="#0B3954" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8 7H16" stroke="#0B3954" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8 10.5H13" stroke="#0B3954" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <h4 className="text-[#0B3954] font-semibold text-base">Book Categories</h4>
            </div>

          </div>
          <div className="absolute right-20 top-0">
            <img
              src="https://s3-alpha-sig.figma.com/img/a58b/a7b5/56c0b55beb6f5293b7ad9065c7eca3d1?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=KXwSItOG7pJjKYJJKJhbX0x9hWF0C6gIs7I-Yzvx5EpO0AHCgV3De1~oEeXKjaDNdugNCV2RBZ3Cpqi-xiELt5Frs4OQkbtTW8Tnzz1cMzNxAbAkS8zD9VYdXvp~Af5E5xO0olGQO0q0SIgJ-xmRz~rAks46AF-Sf3WS4qE8c9AIuIIdMt6PKCDQPo3axkJX1NzlXiatohYouaihN44SbmQrBg7hLDbCAC5SY0uabn-nZ2TnIEH7vk5yElVrPKoBk~8yswuk2Wx83KUprUhII2fnfBjqUFzpooTJzVPEI1M070HYHectMYg8PtpXSS~HSAiChOy~nGYVD9MqAcQe-A__"
              width={200}
              alt="Picture of the Book Category"
              className="rounded-md drop-shadow-lg"
            />
          </div>
          
        </div>
        <div className="pt-72 px-20">
          <Link href={`/book-categories/${id}`}>
            <h2 className="text-[#0B3954] font-semibold text-2xl">
              How Do You Live?
            </h2>
            <div className="flex gap-2 text-lg py-2">
              <p>by</p>
              <h4 className="text-[#087E8B] font-semibold">Black Monster</h4>
            </div>
            <p className="font-normal leading-7">
              "How Do You Live?" (君たちはどう生きるか, Kimitachi wa Dō Ikiru ka)
              by Genzaburō Yoshino is a philosophical coming-of-age novel set in
              pre-war Japan. It revolves around Junichi "Copper" Honda, a
              thoughtful 15-year-old boy, who is facing the complexities of
              adolescence, his family life, and the social realities around him.
              Copper's life changes after his father’s death, which forces him to
              grapple with the idea of responsibility, morality, and the value of
              individual actions. The novel takes a unique approach by blending a
              narrative with deep philosophical lessons. Copper’s Uncle, a major
              influence on him, writes long letters to him that contain valuable
              wisdom about how one should live life, focusing on themes like
              social justice, personal responsibility, and compassion. These
              letters are the central guide for Copper, offering him tools to
              navigate the world and think critically about what it means to be a
              good person. Throughout the story, Copper experiences several
              incidents that challenge his understanding of society. He confronts
              issues like bullying, classism, and how to deal with personal
              suffering. One important aspect of the novel is Copper's
              relationship with his peers and the way he learns to handle the
              complexities of friendships and social interactions. He also learns
              about the differences between the ideal self and the real self,
              discovering how to cope with imperfections and imperfections in
              others. Copper’s growth throughout the novel isn't just emotional
              but deeply intellectual. His uncle’s lessons on the
              interconnectedness of people, the importance of self-awareness, and
              contributing to the greater good shape Copper into a reflective and
              compassionate young man. By the end of the novel, Copper begins to
              develop a clearer understanding of how he should live his life,
              striving to be a person who lives not only for himself but also for
              others. The book isn’t just about a boy growing up; it’s a call to
              the readers to reflect on their own lives and the way they live in
              the world. It challenges its audience to think critically about
              their values and actions, making it timeless in its appeal. The
              story is particularly impactful for younger readers, as it offers
              them both a fictional narrative and practical lessons for life. In
              addition to its philosophical depth, "How Do You Live?" has
              influenced Japanese culture profoundly. The book has been celebrated
              for its positive moral teachings, and its themes are still relevant
              in contemporary conversations about ethical living. The novel has
              had a lasting impact on Japanese literature and has inspired
              filmmakers like Hayao Miyazaki, who used it as a primary inspiration
              for his 2023 animated film "The Boy and the Heron". The enduring
              appeal of "How Do You Live?" lies in its universal exploration of
              the human experience, making it a classic read for generations. 4o
              mini
            </p>
          </Link>
          
        </div>
      </div>
    </>
  );
}
