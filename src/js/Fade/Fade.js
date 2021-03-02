const Fade = item => {

        item.animate([

            {
                opacity: '1'
                    },
            {
                opacity: '.3'
                    },
            {
                opacity: '1'
                    }
                ], {

            duration: 3000,
            delay: -1000
        });



}

export default Fade;

