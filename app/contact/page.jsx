import Form from "@/components/Form"

const Contact = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="flex flex-col xl:grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24 gap-8">

          {/* text */}
          <div className="flex flex-col justify-center">
          <h1 className="h1 max-w-md mb-8 text-primary"
          >Let's Work Together.</h1>
          <p className="subtitle max-w-[400px]">
          I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
        </div>
        {/* form */}
        <div className="flex items-center justify-center xl:justify-start w-full mt-4 xl:mt-12">
        <div className="w-full max-w-md"><Form/></div>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Contact