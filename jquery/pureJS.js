$(document).ready(function() {

  var geo = "#geography";
  var food = "#food";
  var fest = "#festivals";
  var att = "#attractions";
  var lang = "#languages";

  $(geo).click(function() {
    $("#clickGeo").fadeOut('slow', newpage)
  });

  function newpage() {
    window.location.href = "geography.html";
  };


  $(food).click(function() {
    $("#clickFood").fadeOut('slow', newpage2)
  });

  function newpage2() {
    window.location.href = "topic.html";
  };


  $(fest).click(function() {
    $("#clickFestival").fadeOut('slow', newpage2)
  });


  $(att).click(function() {
    $("#clickAtt").fadeOut('slow', newpage2)
  });

  $(lang).click(function() {
    $("#clickLang").fadeOut('slow', newpage2)
  });









$(geo).css('cursor', 'pointer'); $(food).css('cursor', 'pointer'); $(fest).css('cursor', 'pointer'); $(att).css('cursor', 'pointer'); $(lang).css('cursor', 'pointer');


$(geo).hover(
  function() {
    $(this).css('background-color', '#ff0')
  },
  function() {
    $(this).css('background-color', '')
  }
);

$(food).hover(
  function() {
    $(this).css('background-color', '#ff0')
  },
  function() {
    $(this).css('background-color', '')
  });

$(fest).hover(
  function() {
    $(this).css('background-color', '#ff0')
  },
  function() {
    $(this).css('background-color', '')
  });

$(att).hover(
  function() {
    $(this).css('background-color', '#ff0')
  },
  function() {
    $(this).css('background-color', '')
  });

$(lang).hover(
  function() {
    $(this).css('background-color', '#ff0')
  },
  function() {
    $(this).css('background-color', '')
  });



$(geo).hover(
  function() {
    var $this = $("#clickGeo");
    $this.data('initialText', $this.text());
    $this.text("Click to learn more about the geography, climate, and location of Hong Kong");
  },
  function() {
    var $this = $("#clickGeo");
    $this.text($this.data('initialText'));
  });


$(food).hover(
  function() {
    var $this = $("#clickFood");
    $this.data('initialText', $this.text());
    $this.text("Click to learn more about the famous dishes of Hong Kong");
  },
  function() {
    var $this = $("#clickFood");
    $this.text($this.data('initialText'));
  });

$(att).hover(
  function() {
    var $this = $("#clickAtt");
    $this.data('initialText', $this.text());
    $this.text("Click to learn more about the major attractions of Hong Kong");
  },
  function() {
    var $this = $("#clickAtt");
    $this.text($this.data('initialText'));
  });

$(fest).hover(
  function() {
    var $this = $("#clickFestival");
    $this.data('initialText', $this.text());
    $this.text("Click to learn more about the significant holidays and festivals of Hong Kong");
  },
  function() {
    var $this = $("#clickFestival");
    $this.text($this.data('initialText'));
  });

$(lang).hover(
  function() {
    var $this = $("#clickLang");
    $this.data('initialText', $this.text());
    $this.text("Click to learn more about the different languages spoken in Hong Kong");
  },
  function() {
    var $this = $("#clickLang");
    $this.text($this.data('initialText'));
  });

});
