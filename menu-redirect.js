jQuery(document).ready(function($){
  $("#menu-item-4199").on("click", function(e){ // 1. The Online Environment
      e.preventDefault();
      console.log(sessionStorage.getItem('submitted'));
      sessionStorage.setItem('domain', document.domain);
      if(sessionStorage.getItem('submitted') == 'true'){
    console.log('Already submitted!');
          window.open("https://www.designteachengage.wisc.edu/the-online-environment/sdc-overview/", '_top');
      }
      else{
        console.log('Not submitted yet!');
        sessionStorage.setItem('submitted', 'false');
        sessionStorage.setItem('link', "https://www.designteachengage.wisc.edu/the-online-environment/sdc-overview/");
        window.open("https://www.designteachengage.wisc.edu/deep-dive/", '_top');
      }
  });

  $("#menu-item-4200").on("click", function(e){ // 2. Transitioning to Online
      e.preventDefault();
      console.log(sessionStorage.getItem('submitted'));
      sessionStorage.setItem('domain', document.domain);
      if(sessionStorage.getItem('submitted') == 'true'){
    console.log('Already submitted!');  
          window.open("https://www.designteachengage.wisc.edu/transitioning-to-the-online-environment/sdc-overview/", '_top');
      }
      else{
        console.log('Not submitted yet!');
        sessionStorage.setItem('submitted', 'false');
        sessionStorage.setItem('link', 'https://www.designteachengage.wisc.edu/transitioning-to-the-online-environment/sdc-overview/');
        window.open("https://www.designteachengage.wisc.edu/deep-dive/", '_top');
      }
  });

  $("#menu-item-4201").on("click", function(e){ // 3. Online Instructor Roles
      e.preventDefault();
      console.log(sessionStorage.getItem('submitted'));
      sessionStorage.setItem('domain', document.domain);
      if(sessionStorage.getItem('submitted') == 'true'){
    console.log('Already submitted!');
          window.open("https://www.designteachengage.wisc.edu/online-instructor-roles/sdc-overview/", '_top');
      }
      else{
        console.log('Not submitted yet!');
        sessionStorage.setItem('submitted', 'false');
        sessionStorage.setItem('link', 'https://www.designteachengage.wisc.edu/online-instructor-roles/sdc-overview/');
        window.open("https://www.designteachengage.wisc.edu/deep-dive/", '_top');
      }
  });

  $("#menu-item-4202").on("click", function(e){ // 4. Course Planning
      e.preventDefault();
      console.log(sessionStorage.getItem('submitted'));
      sessionStorage.setItem('domain', document.domain);
      if(sessionStorage.getItem('submitted') == 'true'){
    console.log('Already submitted!');
          window.open("https://www.designteachengage.wisc.edu/course-planning/sdc-overview/", '_top');
      }
      else{
        console.log('Not submitted yet!');
        sessionStorage.setItem('submitted', 'false');
        sessionStorage.setItem('link', 'https://www.designteachengage.wisc.edu/course-planning/sdc-overview/');
        window.open("https://www.designteachengage.wisc.edu/deep-dive/", '_top');
      }
  });

  $("#menu-item-4203").on("click", function(e){ // 5. Learning Objectives & Alignment
      e.preventDefault();
      console.log(sessionStorage.getItem('submitted'));
      sessionStorage.setItem('domain', document.domain);
      if(sessionStorage.getItem('submitted') == 'true'){
    console.log('Already submitted!');
          window.open("https://www.designteachengage.wisc.edu/learning-objectives-and-alignment/sdc-overview/", '_top');
      }
      else{
        console.log('Not submitted yet!');
        sessionStorage.setItem('submitted', 'false');
        sessionStorage.setItem('link', 'https://www.designteachengage.wisc.edu/learning-objectives-and-alignment/sdc-overview/');
        window.open("https://www.designteachengage.wisc.edu/deep-dive/", '_top');
      }
  });

  $("#menu-item-4204").on("click", function(e){ // 6. Assessment & Measurement
      e.preventDefault();
      console.log(sessionStorage.getItem('submitted'));
      sessionStorage.setItem('domain', document.domain);
      if(sessionStorage.getItem('submitted') == 'true'){
    console.log('Already submitted!');
          window.open("https://www.designteachengage.wisc.edu/assessment-measurement/sdc-overview/", '_top');
      }
      else{
        console.log('Not submitted yet!');
        sessionStorage.setItem('submitted', 'false');
        sessionStorage.setItem('link', 'https://www.designteachengage.wisc.edu/assessment-measurement/sdc-overview/');
        window.open("https://www.designteachengage.wisc.edu/deep-dive/", '_top');
      }
  });

  $("#menu-item-4205").on("click", function(e){ // 7. Instructional Materials
      e.preventDefault();
      console.log(sessionStorage.getItem('submitted'));
      sessionStorage.setItem('domain', document.domain);
      if(sessionStorage.getItem('submitted') == 'true'){
    console.log('Already submitted!');
          window.open("https://www.designteachengage.wisc.edu/instructional-materials/sdc-overview/", '_top');
      }
      else{
        console.log('Not submitted yet!');
        sessionStorage.setItem('submitted', 'false');
        sessionStorage.setItem('link', 'https://www.designteachengage.wisc.edu/instructional-materials/sdc-overview/');
        window.open("https://www.designteachengage.wisc.edu/deep-dive/", '_top');
      }
  });

  $("#menu-item-4206").on("click", function(e){ // 8. Course Activities & Learner Interactions
      e.preventDefault();
      console.log(sessionStorage.getItem('submitted'));
      sessionStorage.setItem('domain', document.domain);
      if(sessionStorage.getItem('submitted') == 'true'){
    console.log('Already submitted!');
          window.open("https://www.designteachengage.wisc.edu/course-activities-learner-interaction/sdc-overview/", '_top');
      }
      else{
        console.log('Not submitted yet!');
        sessionStorage.setItem('submitted', 'false');
        sessionStorage.setItem('link', 'https://www.designteachengage.wisc.edu/course-activities-learner-interaction/sdc-overview/');
        window.open("https://www.designteachengage.wisc.edu/deep-dive/", '_top');
      }
  });

  $("#menu-item-4207").on("click", function(e){ // 9. Supporting eLearners
      e.preventDefault();
      console.log(sessionStorage.getItem('submitted'));
      sessionStorage.setItem('domain', document.domain);
      if(sessionStorage.getItem('submitted') == 'true'){
    console.log('Already submitted!'); 
          window.open("https://www.designteachengage.wisc.edu/supporting-elearners/sdc-overview/", '_top');
      }
      else{
        console.log('Not submitted yet!');
        sessionStorage.setItem('submitted', 'false');
        sessionStorage.setItem('link', 'https://www.designteachengage.wisc.edu/supporting-elearners/sdc-overview/');
        window.open("https://www.designteachengage.wisc.edu/deep-dive/", '_top');
      }
  });

  $("#menu-item-4208").on("click", function(e){ // 10. Communication & Participation
      e.preventDefault();
      console.log(sessionStorage.getItem('submitted'));
      sessionStorage.setItem('domain', document.domain);
      if(sessionStorage.getItem('submitted') == 'true'){
    console.log('Already submitted!');
          window.open("https://www.designteachengage.wisc.edu/communication-participation/sdc-overview/", '_top');
      }
      else{
        console.log('Not submitted yet!');
        sessionStorage.setItem('submitted', 'false');
        sessionStorage.setItem('link', 'https://www.designteachengage.wisc.edu/communication-participation/sdc-overview/');
        window.open("https://www.designteachengage.wisc.edu/deep-dive/", '_top');
      }
  });

  $("#menu-item-4209").on("click", function(e){ // 11. Online Discussions
      e.preventDefault();
      console.log(sessionStorage.getItem('submitted'));
      sessionStorage.setItem('domain', document.domain);
      if(sessionStorage.getItem('submitted') == 'true'){
    console.log('Already submitted!');  
          window.open("https://www.designteachengage.wisc.edu/online-discussions/sdc-overview/", '_top');
      }
      else{
        console.log('Not submitted yet!');
        sessionStorage.setItem('submitted', 'false');
        sessionStorage.setItem('link', 'https://www.designteachengage.wisc.edu/online-discussions/sdc-overview/');
        window.open("https://www.designteachengage.wisc.edu/deep-dive/", '_top');
      }
  });

  $("#menu-item-4210").on("click", function(e){ // 12. Course Management Strategies
      e.preventDefault();
      console.log(sessionStorage.getItem('submitted'));
      sessionStorage.setItem('domain', document.domain);
      if(sessionStorage.getItem('submitted') == 'true'){
    console.log('Already submitted!');
        window.open("https://www.designteachengage.wisc.edu/course-management-strategies/sdc-overview/", '_top');
      }
      else{
        console.log('Not submitted yet!');
        sessionStorage.setItem('submitted', 'false');
        sessionStorage.setItem('link', 'https://www.designteachengage.wisc.edu/course-management-strategies/sdc-overview/');
        window.open("https://www.designteachengage.wisc.edu/deep-dive/", '_top');
      }
  });

  $("#menu-item-5373").on("click", function(e){ // 1. Creating Engaging Videos (Micro-Course)
    e.preventDefault();
    console.log(sessionStorage.getItem('submitted'));
    sessionStorage.setItem('domain', document.domain);
    if(sessionStorage.getItem('submitted') == 'true'){
  console.log('Already submitted!');
      window.open("https://designteachengage.wisc.edu/microcourses-overview/mc-developing-video/", '_top');
    }
    else{
      console.log('Not submitted yet!');
      sessionStorage.setItem('submitted', 'false');
      sessionStorage.setItem('link', 'https://designteachengage.wisc.edu/microcourses-overview/mc-developing-video/');
      window.open("https://www.designteachengage.wisc.edu/deep-dive/", '_top');
    }
  });

  $("#menu-item-5233").on("click", function(e){ // 2. Developing Effective Rubrics (Micro-Course)
    e.preventDefault();
    console.log(sessionStorage.getItem('submitted'));
    sessionStorage.setItem('domain', document.domain);
    if(sessionStorage.getItem('submitted') == 'true'){
  console.log('Already submitted!');
      window.open("https://designteachengage.wisc.edu/microcourses-overview/mc-developing-rubrics/", '_top');
    }
    else{
      console.log('Not submitted yet!');
      sessionStorage.setItem('submitted', 'false');
      sessionStorage.setItem('link', 'https://designteachengage.wisc.edu/microcourses-overview/mc-developing-rubrics/');
      window.open("https://www.designteachengage.wisc.edu/deep-dive/", '_top');
    }
  });
});
