$(document).ready(function(){
    $(".categoria").click(function(){
        var categoria =  $(this).attr('id');
        var srcSeta = $("."+categoria+"-icon").attr('src');
        if(srcSeta === 'fontes/img/icon_seta_lado.png' && "."+categoria+"-icon" === "."+categoria+"-icon"){
            $("."+categoria+"-icon").attr('src','fontes/img/icon_seta_baixo.png');
        }
        if(srcSeta === 'fontes/img/icon_seta_baixo.png' && "."+categoria+"-icon" === "."+categoria+"-icon"){
            $("."+categoria+"-icon").attr('src','fontes/img/icon_seta_lado.png');
            $('.'+categoria).removeClass("show");
            $(".img-right-sinal").attr('src','fontes/img/icon_mais.png');
        }
    });
});

$(document).ready(function(){
    $(".text-greendark").click(function(){
        var pergunta = $(this).attr('id');
        var srcSinal = $("."+pergunta+"-icon").attr('src');
        if(srcSinal === 'fontes/img/icon_mais.png' && "."+pergunta+"-icon" === "."+pergunta+"-icon"){
            $("."+pergunta+"-icon").attr('src','fontes/img/icon_menos.png');
        }
        if(srcSinal === 'fontes/img/icon_menos.png' && "."+pergunta+"-icon" === "."+pergunta+"-icon"){
            $("."+pergunta+"-icon").attr('src','fontes/img/icon_mais.png');
        }
    });
});

$(document).ready(function(){
    $(".img-curtiu").click(function(){
        var curtiu = $(this).attr('id');
        var srcCurtiu = $(".curtiu-"+curtiu).attr('src');
        var srcNcurtiu = $(".ncurtiu-"+curtiu).attr('src');
        if(srcCurtiu === 'fontes/img/curti.png' && srcNcurtiu != 'fontes/img/nao_curti_fundo.png'){
            $(".curtiu-"+curtiu).attr('src','fontes/img/curti_fundo.png');
        }
        else if(srcCurtiu === 'fontes/img/curti_fundo.png' && srcNcurtiu != 'fontes/img/nao_curti_fundo.png'){
            $(".curtiu-"+curtiu).attr('src','fontes/img/curti.png');
        }else{
            $(".curtiu-"+curtiu).attr('src','fontes/img/curti.png');
        }
    });
    $(".img-ncurtiu").click(function(){
        var curtiu = $(this).attr('id');
        var srcCurtiu = $(".curtiu-"+curtiu).attr('src');
        var srcNcurtiu = $(".ncurtiu-"+curtiu).attr('src');
        if(srcNcurtiu === 'fontes/img/nao_curti.png' && srcCurtiu != 'fontes/img/curti_fundo.png'){
            $(".ncurtiu-"+curtiu).attr('src','fontes/img/nao_curti_fundo.png');
        }
        else if(srcNcurtiu === 'fontes/img/nao_curti_fundo.png' && srcCurtiu != 'fontes/img/curti_fundo.png'){
            $(".ncurtiu-"+curtiu).attr('src','fontes/img/nao_curti.png');
        }else{
            $(".ncurtiu-"+curtiu).attr('src','fontes/img/nao_curti.png');
        }
    });
});