// import components
import Circles from '/components/Circles';

// import icons
import { BsArrowRight } from 'react-icons/bs';

// import framer motion
import { motion } from 'framer-motion';

// import variants
import { fadeIn } from '../../variants';

// import Formspree
import { useForm, ValidationError } from '@formspree/react';



const Contact = () => {
  const [state, handleSubmit] = useForm("mldbyelj")
  if (state.succeeded) {
    return (
      <div className='h-full bg-primary'>
        <div className='container mx-auto py-32 text-center xl:text-left flex
        items-center justify-center h-full'>
          <motion.h2
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h2 text-center mb-12'>
            Thank you for reaching out!
          </motion.h2>
        </div>
      </div>
    );
  } 

  // if the form is submitting, show a loading state
  if (state.submitting) {
    return (
      <div className='h-full bg-primary'>
        <div className='container mx-auto py-32 text-center xl:text-left flex
        items-center justify-center h-full'>
          <motion.h2
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h2 text-center mb-12'>
            Submitting...
          </motion.h2>
        </div>
      </div>
    );
  }

  // if the form is not submitted, show the form
  if (state.errors && Object.keys(state.errors).length > 0) {
 
    return (
      <div className='h-full bg-primary'>
        <div className='container mx-auto py-32 text-center xl:text-left flex
        items-center justify-center h-full'>
          <motion.h2
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h2 text-center mb-12'>
            There was an error submitting the form. Please try again.
          </motion.h2>
        </div>
      </div>
    );
  }

  return (
    <div className='h-full bg-primary'>
      <div className='container mx-auto py-32 text-center xl:text-left flex
      items-center justify-center h-full'>
        {/* text & form */}
        <div className='flex flex-col w-full max-w-[900px] bg-teal-500/10'>
          {/* text */}
          <motion.h2
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h2 text-center mb-12'>
            Let's <span className='text-accent'>connect.</span>
          </motion.h2>
          {/* form */}
          <motion.form
            onSubmit={handleSubmit}
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='flex-1 flex flex-col gap-6 w-full mx-auto'>
            {/* input group */}
            <div className='flex gap-x-2 w-full'>
              <input type='text' name='name' placeholder='name' className='input' />
              <ValidationError prefix='Name' field='name' errors={state.errors} />

              <input type='text' name='email' placeholder='email' className='input' />
              <ValidationError prefix='Email' field='email' errors={state.errors} />
            </div>

            <input type='text' name='subject' placeholder='subject' className='input' />
            <ValidationError prefix='Subject' field='subject' errors={state.errors} />

            <textarea name='message' placeholder='Tell us about your project!' className='textarea' />
            <ValidationError prefix='Message' field='messagge' errors={state.errors} />

            <button
              type='submit'
              disabled={state.submitting}
              className='btn rounded-full border border-white/50 max-w-[170px]
              px-8 transition-all duration-300 flex items-center justify-center
              overflow-hidden hover:border-accent group'
            >
              <span className='group-hover:-translate-y-[120%] group-hover:opacity-0
                transition-all duration-500'
              >
                Let's talk
              </span>
              <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex
                group-hover:translate-y-0 group-hover:opacity-100 transition-all
                duration-300 absolute text-[22px]' />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  )
};

export default Contact;
