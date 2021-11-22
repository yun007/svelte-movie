var ghpages = require('gh-pages');

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/yun007/svelte-movie.git', // Update to point to your repository  
        
        user: {
            name: 'yun007', // update to use your name
            email: 'yunhyosang@naver.com' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)