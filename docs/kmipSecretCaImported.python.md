# `kmipSecretCaImported` Submodule <a name="`kmipSecretCaImported` Submodule" id="@cdktn/provider-vault.kmipSecretCaImported"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KmipSecretCaImported <a name="KmipSecretCaImported" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/kmip_secret_ca_imported vault_kmip_secret_ca_imported}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.Initializer"></a>

```python
from cdktn_provider_vault import kmip_secret_ca_imported

kmipSecretCaImported.KmipSecretCaImported(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  ca_pem: str,
  name: str,
  path: str,
  namespace: str = None,
  role_field: str = None,
  role_name: str = None,
  scope_field: str = None,
  scope_name: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.Initializer.parameter.caPem">ca_pem</a></code> | <code>str</code> | CA certificate in PEM format. |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.Initializer.parameter.name">name</a></code> | <code>str</code> | Name to identify the CA. |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.Initializer.parameter.path">path</a></code> | <code>str</code> | Path where KMIP backend is mounted. |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.Initializer.parameter.roleField">role_field</a></code> | <code>str</code> | The field in the certificate to use for the role (CN, O, OU, or UID). |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.Initializer.parameter.roleName">role_name</a></code> | <code>str</code> | The role name to associate with this CA. Must specify exactly one of role_name or role_field. |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.Initializer.parameter.scopeField">scope_field</a></code> | <code>str</code> | The field in the certificate to use for the scope (CN, O, OU, or UID). |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.Initializer.parameter.scopeName">scope_name</a></code> | <code>str</code> | The scope name to associate with this CA. Must specify exactly one of scope_name or scope_field. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `ca_pem`<sup>Required</sup> <a name="ca_pem" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.Initializer.parameter.caPem"></a>

- *Type:* str

CA certificate in PEM format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/kmip_secret_ca_imported#ca_pem KmipSecretCaImported#ca_pem}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.Initializer.parameter.name"></a>

- *Type:* str

Name to identify the CA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/kmip_secret_ca_imported#name KmipSecretCaImported#name}

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.Initializer.parameter.path"></a>

- *Type:* str

Path where KMIP backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/kmip_secret_ca_imported#path KmipSecretCaImported#path}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/kmip_secret_ca_imported#namespace KmipSecretCaImported#namespace}

---

##### `role_field`<sup>Optional</sup> <a name="role_field" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.Initializer.parameter.roleField"></a>

- *Type:* str

The field in the certificate to use for the role (CN, O, OU, or UID).

Must specify exactly one of role_name or role_field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/kmip_secret_ca_imported#role_field KmipSecretCaImported#role_field}

---

##### `role_name`<sup>Optional</sup> <a name="role_name" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.Initializer.parameter.roleName"></a>

- *Type:* str

The role name to associate with this CA. Must specify exactly one of role_name or role_field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/kmip_secret_ca_imported#role_name KmipSecretCaImported#role_name}

---

##### `scope_field`<sup>Optional</sup> <a name="scope_field" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.Initializer.parameter.scopeField"></a>

- *Type:* str

The field in the certificate to use for the scope (CN, O, OU, or UID).

Must specify exactly one of scope_name or scope_field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/kmip_secret_ca_imported#scope_field KmipSecretCaImported#scope_field}

---

##### `scope_name`<sup>Optional</sup> <a name="scope_name" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.Initializer.parameter.scopeName"></a>

- *Type:* str

The scope name to associate with this CA. Must specify exactly one of scope_name or scope_field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/kmip_secret_ca_imported#scope_name KmipSecretCaImported#scope_name}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.resetRoleField">reset_role_field</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.resetRoleName">reset_role_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.resetScopeField">reset_scope_field</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.resetScopeName">reset_scope_name</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.with"></a>

```python
def with(
  mixins: *IMixin
) -> IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_namespace` <a name="reset_namespace" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_role_field` <a name="reset_role_field" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.resetRoleField"></a>

```python
def reset_role_field() -> None
```

##### `reset_role_name` <a name="reset_role_name" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.resetRoleName"></a>

```python
def reset_role_name() -> None
```

##### `reset_scope_field` <a name="reset_scope_field" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.resetScopeField"></a>

```python
def reset_scope_field() -> None
```

##### `reset_scope_name` <a name="reset_scope_name" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.resetScopeName"></a>

```python
def reset_scope_name() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a KmipSecretCaImported resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.isConstruct"></a>

```python
from cdktn_provider_vault import kmip_secret_ca_imported

kmipSecretCaImported.KmipSecretCaImported.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.isTerraformElement"></a>

```python
from cdktn_provider_vault import kmip_secret_ca_imported

kmipSecretCaImported.KmipSecretCaImported.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.isTerraformResource"></a>

```python
from cdktn_provider_vault import kmip_secret_ca_imported

kmipSecretCaImported.KmipSecretCaImported.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.generateConfigForImport"></a>

```python
from cdktn_provider_vault import kmip_secret_ca_imported

kmipSecretCaImported.KmipSecretCaImported.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a KmipSecretCaImported resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the KmipSecretCaImported to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing KmipSecretCaImported that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/kmip_secret_ca_imported#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the KmipSecretCaImported to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.caPemInput">ca_pem_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.roleFieldInput">role_field_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.roleNameInput">role_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.scopeFieldInput">scope_field_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.scopeNameInput">scope_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.caPem">ca_pem</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.roleField">role_field</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.roleName">role_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.scopeField">scope_field</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.scopeName">scope_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `ca_pem_input`<sup>Optional</sup> <a name="ca_pem_input" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.caPemInput"></a>

```python
ca_pem_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `role_field_input`<sup>Optional</sup> <a name="role_field_input" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.roleFieldInput"></a>

```python
role_field_input: str
```

- *Type:* str

---

##### `role_name_input`<sup>Optional</sup> <a name="role_name_input" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.roleNameInput"></a>

```python
role_name_input: str
```

- *Type:* str

---

##### `scope_field_input`<sup>Optional</sup> <a name="scope_field_input" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.scopeFieldInput"></a>

```python
scope_field_input: str
```

- *Type:* str

---

##### `scope_name_input`<sup>Optional</sup> <a name="scope_name_input" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.scopeNameInput"></a>

```python
scope_name_input: str
```

- *Type:* str

---

##### `ca_pem`<sup>Required</sup> <a name="ca_pem" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.caPem"></a>

```python
ca_pem: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `role_field`<sup>Required</sup> <a name="role_field" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.roleField"></a>

```python
role_field: str
```

- *Type:* str

---

##### `role_name`<sup>Required</sup> <a name="role_name" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.roleName"></a>

```python
role_name: str
```

- *Type:* str

---

##### `scope_field`<sup>Required</sup> <a name="scope_field" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.scopeField"></a>

```python
scope_field: str
```

- *Type:* str

---

##### `scope_name`<sup>Required</sup> <a name="scope_name" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.scopeName"></a>

```python
scope_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### KmipSecretCaImportedConfig <a name="KmipSecretCaImportedConfig" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImportedConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImportedConfig.Initializer"></a>

```python
from cdktn_provider_vault import kmip_secret_ca_imported

kmipSecretCaImported.KmipSecretCaImportedConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  ca_pem: str,
  name: str,
  path: str,
  namespace: str = None,
  role_field: str = None,
  role_name: str = None,
  scope_field: str = None,
  scope_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImportedConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImportedConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImportedConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImportedConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImportedConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImportedConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImportedConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImportedConfig.property.caPem">ca_pem</a></code> | <code>str</code> | CA certificate in PEM format. |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImportedConfig.property.name">name</a></code> | <code>str</code> | Name to identify the CA. |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImportedConfig.property.path">path</a></code> | <code>str</code> | Path where KMIP backend is mounted. |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImportedConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImportedConfig.property.roleField">role_field</a></code> | <code>str</code> | The field in the certificate to use for the role (CN, O, OU, or UID). |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImportedConfig.property.roleName">role_name</a></code> | <code>str</code> | The role name to associate with this CA. Must specify exactly one of role_name or role_field. |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImportedConfig.property.scopeField">scope_field</a></code> | <code>str</code> | The field in the certificate to use for the scope (CN, O, OU, or UID). |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImportedConfig.property.scopeName">scope_name</a></code> | <code>str</code> | The scope name to associate with this CA. Must specify exactly one of scope_name or scope_field. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImportedConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImportedConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImportedConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImportedConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImportedConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImportedConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImportedConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `ca_pem`<sup>Required</sup> <a name="ca_pem" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImportedConfig.property.caPem"></a>

```python
ca_pem: str
```

- *Type:* str

CA certificate in PEM format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/kmip_secret_ca_imported#ca_pem KmipSecretCaImported#ca_pem}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImportedConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name to identify the CA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/kmip_secret_ca_imported#name KmipSecretCaImported#name}

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImportedConfig.property.path"></a>

```python
path: str
```

- *Type:* str

Path where KMIP backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/kmip_secret_ca_imported#path KmipSecretCaImported#path}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImportedConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/kmip_secret_ca_imported#namespace KmipSecretCaImported#namespace}

---

##### `role_field`<sup>Optional</sup> <a name="role_field" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImportedConfig.property.roleField"></a>

```python
role_field: str
```

- *Type:* str

The field in the certificate to use for the role (CN, O, OU, or UID).

Must specify exactly one of role_name or role_field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/kmip_secret_ca_imported#role_field KmipSecretCaImported#role_field}

---

##### `role_name`<sup>Optional</sup> <a name="role_name" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImportedConfig.property.roleName"></a>

```python
role_name: str
```

- *Type:* str

The role name to associate with this CA. Must specify exactly one of role_name or role_field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/kmip_secret_ca_imported#role_name KmipSecretCaImported#role_name}

---

##### `scope_field`<sup>Optional</sup> <a name="scope_field" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImportedConfig.property.scopeField"></a>

```python
scope_field: str
```

- *Type:* str

The field in the certificate to use for the scope (CN, O, OU, or UID).

Must specify exactly one of scope_name or scope_field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/kmip_secret_ca_imported#scope_field KmipSecretCaImported#scope_field}

---

##### `scope_name`<sup>Optional</sup> <a name="scope_name" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImportedConfig.property.scopeName"></a>

```python
scope_name: str
```

- *Type:* str

The scope name to associate with this CA. Must specify exactly one of scope_name or scope_field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/kmip_secret_ca_imported#scope_name KmipSecretCaImported#scope_name}

---



