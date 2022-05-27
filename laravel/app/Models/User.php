<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use App\Models\Meditation;
use App\Models\SavedMeditation;
use App\Models\Breath;
use App\Models\SavedBreath;
use App\Models\History;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
  use HasApiTokens, HasFactory, Notifiable;

  /**
   * The attributes that are mass assignable.
   *
   * @var array<int, string>
   */
  protected $fillable = [
    'name',
    'email',
    'password',
  ];

  /**
   * The attributes that should be hidden for serialization.
   *
   * @var array<int, string>
   */
  protected $hidden = [
    'password',
    'remember_token',
  ];

  /**
   * The attributes that should be cast.
   *
   * @var array<string, string>
   */
  protected $casts = [
    'email_verified_at' => 'datetime',
  ];

  public function savedMeditation()
  {
    return $this->belongsToMany(Meditation::class, 'saved_meditations', 'user_id', 'meditation_id', 'id', 'id');
  }

  public function createdMeditation()
  {
    return $this->hasMany(Meditation::class, 'author_id');
  }

  public function savedBreathing()
  {
    return $this->hasMany(SavedBreath::class, 'breath_id');
  }

  public function createdBreathing()
  {
    return $this->hasMany(Breath::class, 'author_id');
  }

  public function history()
  {
    return $this->hasMany(History::class, 'user_id');
  }
}
