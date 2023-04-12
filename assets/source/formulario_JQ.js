$("#contacto-formulario").validate({
  rules: {
    nombre: {
      required: true,
      minlength: 3,
      maxlength: 30,
    },
    email: {
      required: true,
      email: true,
    },
    telefono: {
      required: true,
    },
    motivo: {
      required: true,
    },
    mensaje: {
      required: true,
      minlength: 5,
      maxlength: 200,
    },
  },
});

$("#guardar").click(function () {
  let nombre = $("#nombre").val();
  let email = $("#email").val();
  let telefono = $("#telefono").val();
  let motivo = $("#motivo").val();
  let mensaje = $("#mensaje").val();
  let terminos = $("#terminos").is(":checked");
  alert("Enviado");
});
