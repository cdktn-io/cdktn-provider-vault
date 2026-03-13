# `pkiSecretBackendAcmeAccount` Submodule <a name="`pkiSecretBackendAcmeAccount` Submodule" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PkiSecretBackendAcmeAccount <a name="PkiSecretBackendAcmeAccount" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/pki_secret_backend_acme_account vault_pki_secret_backend_acme_account}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.Initializer"></a>

```python
from cdktn_provider_vault import pki_secret_backend_acme_account

pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  directory_url: str,
  email_contacts: typing.List[str],
  mount: str,
  name: str,
  eab_key: str = None,
  eab_kid: str = None,
  key_type: str = None,
  namespace: str = None,
  trusted_ca: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.Initializer.parameter.directoryUrl">directory_url</a></code> | <code>str</code> | ACME Directory URL. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.Initializer.parameter.emailContacts">email_contacts</a></code> | <code>typing.List[str]</code> | Email addresses for the ACME account. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.Initializer.parameter.mount">mount</a></code> | <code>str</code> | The path where the PKI secret backend is mounted. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the ACME account. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.Initializer.parameter.eabKey">eab_key</a></code> | <code>str</code> | A standard base64 encoded external binding token to create the initial account. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.Initializer.parameter.eabKid">eab_kid</a></code> | <code>str</code> | The external binding key ID to create the initial account. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.Initializer.parameter.keyType">key_type</a></code> | <code>str</code> | Key type to generate for the account key. Valid values are `ec-256`, `ec-384`, `ec-521`, `rsa-2048`, `rsa-4096`, `rsa-8192`. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.Initializer.parameter.trustedCa">trusted_ca</a></code> | <code>str</code> | Trusted CA certificates for the ACME server. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `directory_url`<sup>Required</sup> <a name="directory_url" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.Initializer.parameter.directoryUrl"></a>

- *Type:* str

ACME Directory URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/pki_secret_backend_acme_account#directory_url PkiSecretBackendAcmeAccount#directory_url}

---

##### `email_contacts`<sup>Required</sup> <a name="email_contacts" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.Initializer.parameter.emailContacts"></a>

- *Type:* typing.List[str]

Email addresses for the ACME account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/pki_secret_backend_acme_account#email_contacts PkiSecretBackendAcmeAccount#email_contacts}

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.Initializer.parameter.mount"></a>

- *Type:* str

The path where the PKI secret backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/pki_secret_backend_acme_account#mount PkiSecretBackendAcmeAccount#mount}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.Initializer.parameter.name"></a>

- *Type:* str

Name of the ACME account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/pki_secret_backend_acme_account#name PkiSecretBackendAcmeAccount#name}

---

##### `eab_key`<sup>Optional</sup> <a name="eab_key" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.Initializer.parameter.eabKey"></a>

- *Type:* str

A standard base64 encoded external binding token to create the initial account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/pki_secret_backend_acme_account#eab_key PkiSecretBackendAcmeAccount#eab_key}

---

##### `eab_kid`<sup>Optional</sup> <a name="eab_kid" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.Initializer.parameter.eabKid"></a>

- *Type:* str

The external binding key ID to create the initial account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/pki_secret_backend_acme_account#eab_kid PkiSecretBackendAcmeAccount#eab_kid}

---

##### `key_type`<sup>Optional</sup> <a name="key_type" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.Initializer.parameter.keyType"></a>

- *Type:* str

Key type to generate for the account key. Valid values are `ec-256`, `ec-384`, `ec-521`, `rsa-2048`, `rsa-4096`, `rsa-8192`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/pki_secret_backend_acme_account#key_type PkiSecretBackendAcmeAccount#key_type}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/pki_secret_backend_acme_account#namespace PkiSecretBackendAcmeAccount#namespace}

---

##### `trusted_ca`<sup>Optional</sup> <a name="trusted_ca" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.Initializer.parameter.trustedCa"></a>

- *Type:* str

Trusted CA certificates for the ACME server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/pki_secret_backend_acme_account#trusted_ca PkiSecretBackendAcmeAccount#trusted_ca}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.resetEabKey">reset_eab_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.resetEabKid">reset_eab_kid</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.resetKeyType">reset_key_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.resetTrustedCa">reset_trusted_ca</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_eab_key` <a name="reset_eab_key" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.resetEabKey"></a>

```python
def reset_eab_key() -> None
```

##### `reset_eab_kid` <a name="reset_eab_kid" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.resetEabKid"></a>

```python
def reset_eab_kid() -> None
```

##### `reset_key_type` <a name="reset_key_type" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.resetKeyType"></a>

```python
def reset_key_type() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_trusted_ca` <a name="reset_trusted_ca" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.resetTrustedCa"></a>

```python
def reset_trusted_ca() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a PkiSecretBackendAcmeAccount resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.isConstruct"></a>

```python
from cdktn_provider_vault import pki_secret_backend_acme_account

pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.isTerraformElement"></a>

```python
from cdktn_provider_vault import pki_secret_backend_acme_account

pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.isTerraformResource"></a>

```python
from cdktn_provider_vault import pki_secret_backend_acme_account

pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.generateConfigForImport"></a>

```python
from cdktn_provider_vault import pki_secret_backend_acme_account

pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a PkiSecretBackendAcmeAccount resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the PkiSecretBackendAcmeAccount to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing PkiSecretBackendAcmeAccount that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/pki_secret_backend_acme_account#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the PkiSecretBackendAcmeAccount to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.activeKeyVersion">active_key_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.directoryUrlInput">directory_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.eabKeyInput">eab_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.eabKidInput">eab_kid_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.emailContactsInput">email_contacts_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.keyTypeInput">key_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.mountInput">mount_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.trustedCaInput">trusted_ca_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.directoryUrl">directory_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.eabKey">eab_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.eabKid">eab_kid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.emailContacts">email_contacts</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.keyType">key_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.mount">mount</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.trustedCa">trusted_ca</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `active_key_version`<sup>Required</sup> <a name="active_key_version" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.activeKeyVersion"></a>

```python
active_key_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `directory_url_input`<sup>Optional</sup> <a name="directory_url_input" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.directoryUrlInput"></a>

```python
directory_url_input: str
```

- *Type:* str

---

##### `eab_key_input`<sup>Optional</sup> <a name="eab_key_input" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.eabKeyInput"></a>

```python
eab_key_input: str
```

- *Type:* str

---

##### `eab_kid_input`<sup>Optional</sup> <a name="eab_kid_input" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.eabKidInput"></a>

```python
eab_kid_input: str
```

- *Type:* str

---

##### `email_contacts_input`<sup>Optional</sup> <a name="email_contacts_input" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.emailContactsInput"></a>

```python
email_contacts_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `key_type_input`<sup>Optional</sup> <a name="key_type_input" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.keyTypeInput"></a>

```python
key_type_input: str
```

- *Type:* str

---

##### `mount_input`<sup>Optional</sup> <a name="mount_input" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.mountInput"></a>

```python
mount_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `trusted_ca_input`<sup>Optional</sup> <a name="trusted_ca_input" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.trustedCaInput"></a>

```python
trusted_ca_input: str
```

- *Type:* str

---

##### `directory_url`<sup>Required</sup> <a name="directory_url" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.directoryUrl"></a>

```python
directory_url: str
```

- *Type:* str

---

##### `eab_key`<sup>Required</sup> <a name="eab_key" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.eabKey"></a>

```python
eab_key: str
```

- *Type:* str

---

##### `eab_kid`<sup>Required</sup> <a name="eab_kid" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.eabKid"></a>

```python
eab_kid: str
```

- *Type:* str

---

##### `email_contacts`<sup>Required</sup> <a name="email_contacts" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.emailContacts"></a>

```python
email_contacts: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `key_type`<sup>Required</sup> <a name="key_type" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.keyType"></a>

```python
key_type: str
```

- *Type:* str

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.mount"></a>

```python
mount: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `trusted_ca`<sup>Required</sup> <a name="trusted_ca" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.trustedCa"></a>

```python
trusted_ca: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### PkiSecretBackendAcmeAccountConfig <a name="PkiSecretBackendAcmeAccountConfig" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccountConfig.Initializer"></a>

```python
from cdktn_provider_vault import pki_secret_backend_acme_account

pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccountConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  directory_url: str,
  email_contacts: typing.List[str],
  mount: str,
  name: str,
  eab_key: str = None,
  eab_kid: str = None,
  key_type: str = None,
  namespace: str = None,
  trusted_ca: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccountConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccountConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccountConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccountConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccountConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccountConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccountConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccountConfig.property.directoryUrl">directory_url</a></code> | <code>str</code> | ACME Directory URL. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccountConfig.property.emailContacts">email_contacts</a></code> | <code>typing.List[str]</code> | Email addresses for the ACME account. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccountConfig.property.mount">mount</a></code> | <code>str</code> | The path where the PKI secret backend is mounted. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccountConfig.property.name">name</a></code> | <code>str</code> | Name of the ACME account. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccountConfig.property.eabKey">eab_key</a></code> | <code>str</code> | A standard base64 encoded external binding token to create the initial account. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccountConfig.property.eabKid">eab_kid</a></code> | <code>str</code> | The external binding key ID to create the initial account. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccountConfig.property.keyType">key_type</a></code> | <code>str</code> | Key type to generate for the account key. Valid values are `ec-256`, `ec-384`, `ec-521`, `rsa-2048`, `rsa-4096`, `rsa-8192`. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccountConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccountConfig.property.trustedCa">trusted_ca</a></code> | <code>str</code> | Trusted CA certificates for the ACME server. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccountConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccountConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccountConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccountConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccountConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccountConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccountConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `directory_url`<sup>Required</sup> <a name="directory_url" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccountConfig.property.directoryUrl"></a>

```python
directory_url: str
```

- *Type:* str

ACME Directory URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/pki_secret_backend_acme_account#directory_url PkiSecretBackendAcmeAccount#directory_url}

---

##### `email_contacts`<sup>Required</sup> <a name="email_contacts" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccountConfig.property.emailContacts"></a>

```python
email_contacts: typing.List[str]
```

- *Type:* typing.List[str]

Email addresses for the ACME account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/pki_secret_backend_acme_account#email_contacts PkiSecretBackendAcmeAccount#email_contacts}

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccountConfig.property.mount"></a>

```python
mount: str
```

- *Type:* str

The path where the PKI secret backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/pki_secret_backend_acme_account#mount PkiSecretBackendAcmeAccount#mount}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccountConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the ACME account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/pki_secret_backend_acme_account#name PkiSecretBackendAcmeAccount#name}

---

##### `eab_key`<sup>Optional</sup> <a name="eab_key" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccountConfig.property.eabKey"></a>

```python
eab_key: str
```

- *Type:* str

A standard base64 encoded external binding token to create the initial account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/pki_secret_backend_acme_account#eab_key PkiSecretBackendAcmeAccount#eab_key}

---

##### `eab_kid`<sup>Optional</sup> <a name="eab_kid" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccountConfig.property.eabKid"></a>

```python
eab_kid: str
```

- *Type:* str

The external binding key ID to create the initial account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/pki_secret_backend_acme_account#eab_kid PkiSecretBackendAcmeAccount#eab_kid}

---

##### `key_type`<sup>Optional</sup> <a name="key_type" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccountConfig.property.keyType"></a>

```python
key_type: str
```

- *Type:* str

Key type to generate for the account key. Valid values are `ec-256`, `ec-384`, `ec-521`, `rsa-2048`, `rsa-4096`, `rsa-8192`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/pki_secret_backend_acme_account#key_type PkiSecretBackendAcmeAccount#key_type}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccountConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/pki_secret_backend_acme_account#namespace PkiSecretBackendAcmeAccount#namespace}

---

##### `trusted_ca`<sup>Optional</sup> <a name="trusted_ca" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccountConfig.property.trustedCa"></a>

```python
trusted_ca: str
```

- *Type:* str

Trusted CA certificates for the ACME server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/pki_secret_backend_acme_account#trusted_ca PkiSecretBackendAcmeAccount#trusted_ca}

---



