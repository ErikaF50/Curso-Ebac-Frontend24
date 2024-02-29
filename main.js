$(document).ready(function() {
    $('#carousel-imagens').slick({
        autoplay: true,
    });

    $('.menu-hamburguer').click(function() {
        $('nav').slideToggle();
    })

$('#telefone').mask('(00) 00000-0000') 

$('#cpf').mask('000-000-000-00')

$('cep').mask('00.000-000')

$('form').validate({
    rules: {
        nome: {
            required: true
            },
        sobrenome: {
            required: true
        },
        email: {
                required: true,
                email: true
        },
        telefone: {
            required: true
        },
        cpf: {
            required: true
        },
        cep: {
            required: true
        },
        endereço: {
            required: false,
        }
    },
    messages: {
        nome:'Por favor, insira seu nome'
    },
    messages: {
        sobrenome:'Por favor, insira seu sobrenome'
    },
    messages: {
        cpf:'Por favor, insira seu CPF'
    },
    messages: {
        telefone:'Por favor, insira seu telefone'
    },
    messages: {
        email:'Por favor, insira seu email'
    },
    messages: {
        cep: 'Por favor, insira seu cep'
    },
    submitHandler: function(form) {
        console.log(form)
    },
    invalidHandler: function(evento, validador) {
        let camposIncorretos = validador.numberOfInvalids();
        if (camposIncorretos) {
            alert(`Existem ${camposIncorretos} campos incorretos`)
        }
    }
})

    $('.lista-cursos button').click(function() {
        const destino = $('#contato')
        const nomeDoCurso = $(this).parent().find('h3').text();

        $('#listaCursos').val(nomeDoCurso);

        $('html').animate({
            scrollTop: destino.offset().top
        },1000)
    })
})