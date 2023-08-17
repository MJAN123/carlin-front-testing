import React from "react"
import Animation from "src/utils/elements/Animation"

import HomeFaqQuestion from "@/components/home/HomeFaqQuestion"
import { AnimationType } from "@/lib/types/enums"

const HomeFaq = () => {
  return (
    <>
      <div className="grid h-full w-full grid-cols-1 bg-blue-dark">
        <div
          className="relative flex w-full justify-center overflow-hidden p-20 sm:p-30 md:p-40 lg:p-60 xl:py-100"
          id="faq"
        >
          <div className="absolute top-0 left-1/2 h-80 w-4/5 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-purple-80 blur-[100px] filter"></div>
          <div className="absolute bottom-0 left-1/2 h-60 w-2/5 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-purple-80 blur-[100px] filter"></div>
          <div className="relative grid w-full max-w-screen-xl grid-cols-1 gap-40 sm:gap-60 sm:pt-20 md:gap-100 md:pt-30 lg:gap-[140px] lg:pt-40">
            <div className="grid w-full grid-cols-1 gap-30 sm:gap-40 md:gap-60">
              <div className="flex w-full justify-center">
                <div className="grid w-[720px] max-w-full grid-cols-1 gap-12 sm:gap-20 md:gap-24">
                  <Animation type={AnimationType.Down}>
                    <div className="w-full text-32 font-bold leading-[110%] text-white md:text-center md:text-48 xl:text-54">
                      FAQ on most{" "}
                      <span className="bg-gradient-to-r from-blue to-pink bg-clip-text text-32 font-bold text-transparent md:text-48 xl:text-54">
                        commonly asked questions
                      </span>
                    </div>
                  </Animation>
                </div>
              </div>
              <Animation type={AnimationType.Up}>
                <div className="grid w-full grid-cols-1 gap-12 sm:gap-14 md:gap-16">
                  <HomeFaqQuestion
                    answer={
                      "Donec nec justo eget arcu dignissim rutrum. Ut consectetur dui nec metus elementum ultrices. Vivamus dolor leo, eleifend vel ultrices ornare, dapibus a elit. In auctor eros eu lacus pretium mollis."
                    }
                    question={"How long have you guys been operating for?"}
                  />
                  <HomeFaqQuestion
                    answer={
                      "Donec nec justo eget arcu dignissim rutrum. Ut consectetur dui nec metus elementum ultrices. Vivamus dolor leo, eleifend vel ultrices ornare, dapibus a elit. In auctor eros eu lacus pretium mollis."
                    }
                    question={"What platforms do you use?"}
                  />
                  <HomeFaqQuestion
                    answer={
                      "Donec nec justo eget arcu dignissim rutrum. Ut consectetur dui nec metus elementum ultrices. Vivamus dolor leo, eleifend vel ultrices ornare, dapibus a elit. In auctor eros eu lacus pretium mollis."
                    }
                    question={"Who is teaching us?"}
                  />
                  <HomeFaqQuestion
                    answer={
                      "Donec nec justo eget arcu dignissim rutrum. Ut consectetur dui nec metus elementum ultrices. Vivamus dolor leo, eleifend vel ultrices ornare, dapibus a elit. In auctor eros eu lacus pretium mollis."
                    }
                    question={"Are there other wealth creation methods other than those above?"}
                  />
                  <HomeFaqQuestion
                    answer={
                      "Donec nec justo eget arcu dignissim rutrum. Ut consectetur dui nec metus elementum ultrices. Vivamus dolor leo, eleifend vel ultrices ornare, dapibus a elit. In auctor eros eu lacus pretium mollis."
                    }
                    question={
                      "I’m just a beginner and don’t know where to start, is Carlin right for me? "
                    }
                  />
                  <HomeFaqQuestion
                    answer={
                      "Donec nec justo eget arcu dignissim rutrum. Ut consectetur dui nec metus elementum ultrices. Vivamus dolor leo, eleifend vel ultrices ornare, dapibus a elit. In auctor eros eu lacus pretium mollis."
                    }
                    question={"Do you guys do giveaways?"}
                  />
                  <HomeFaqQuestion
                    answer={
                      "Donec nec justo eget arcu dignissim rutrum. Ut consectetur dui nec metus elementum ultrices. Vivamus dolor leo, eleifend vel ultrices ornare, dapibus a elit. In auctor eros eu lacus pretium mollis."
                    }
                    question={"Will Carlin really help me be successful?"}
                  />
                </div>
              </Animation>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeFaq
