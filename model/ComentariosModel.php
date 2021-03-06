<?php
class ComentariosModel extends Model
{

  public function getComentarios($id_delantal)
  {
    $sentencia = $this->db->prepare( "select * from comentario where id_delantal=?");
    $sentencia->execute([$id_delantal]);
    return $sentencia->fetchAll(PDO::FETCH_ASSOC);
  }

  public function getComentario($id_comentario)
  {
    $sentencia = $this->db->prepare( "select * from comentario where id_comentario = ?");
    $sentencia->execute([$id_comentario]);
    return $sentencia->fetchAll(PDO::FETCH_ASSOC);
  }

  public function deleteComentario($id_comentario)
  {
    $sentencia = $this->db->prepare( "delete from comentario where id_comentario=?");
    $sentencia->execute([$id_comentario]);
  }

  public function guardarComentario($usuario, $descripcion, $puntaje, $id_delantal)
  {
    $sentencia = $this->db->prepare('INSERT INTO comentario(puntaje,usuario,descripcion,id_delantal) VALUES(?,?,?,?)');
    $sentencia->execute([$puntaje,$usuario,$descripcion,$id_delantal]);
    $id_comentario = $this->db->lastInsertId();
    return $this->getComentario($id_comentario);
  }

}

 ?>
