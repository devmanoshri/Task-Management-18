import {
  Component,
  EventEmitter,
  computed,
  input,
  output,
} from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
interface User {
  id: string;
  name: string;
  avatar: string;
}
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  //selectedUser = signal(DUMMY_USERS[randomIndex]);
  //imagePath = computed(()=>'assets/users/' + this.selectedUser().avatar)
  // avatar = input.required<string>();
  // name = input.required<string>();
  // id = input.required<string>();
  user = input.required<User>();
  select = output<string>();

  imagePath = computed(() => {
    return '../../assets/users/' + this.user().avatar;
  });

  onSelectUser() {
    this.select.emit(this.user().id);
  }
}
