# `dataVaultPkiExternalCaSecretBackendOrderChallenge` Submodule <a name="`dataVaultPkiExternalCaSecretBackendOrderChallenge` Submodule" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVaultPkiExternalCaSecretBackendOrderChallenge <a name="DataVaultPkiExternalCaSecretBackendOrderChallenge" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/data-sources/pki_external_ca_secret_backend_order_challenge vault_pki_external_ca_secret_backend_order_challenge}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.Initializer"></a>

```python
from cdktn_provider_vault import data_vault_pki_external_ca_secret_backend_order_challenge

dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  challenge_type: str,
  identifier: str,
  mount: str,
  order_id: str,
  role_name: str,
  namespace: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.Initializer.parameter.challengeType">challenge_type</a></code> | <code>str</code> | The type of ACME challenge to retrieve. Valid values are `http-01`, `dns-01`, `tls-alpn-01`. |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.Initializer.parameter.identifier">identifier</a></code> | <code>str</code> | The identifier (domain name) for which to retrieve the challenge. |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.Initializer.parameter.mount">mount</a></code> | <code>str</code> | The path where the PKI External CA secret backend is mounted. |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.Initializer.parameter.orderId">order_id</a></code> | <code>str</code> | The unique identifier for the ACME order. |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.Initializer.parameter.roleName">role_name</a></code> | <code>str</code> | Name of the role associated with the order. |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `challenge_type`<sup>Required</sup> <a name="challenge_type" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.Initializer.parameter.challengeType"></a>

- *Type:* str

The type of ACME challenge to retrieve. Valid values are `http-01`, `dns-01`, `tls-alpn-01`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/data-sources/pki_external_ca_secret_backend_order_challenge#challenge_type DataVaultPkiExternalCaSecretBackendOrderChallenge#challenge_type}

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.Initializer.parameter.identifier"></a>

- *Type:* str

The identifier (domain name) for which to retrieve the challenge.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/data-sources/pki_external_ca_secret_backend_order_challenge#identifier DataVaultPkiExternalCaSecretBackendOrderChallenge#identifier}

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.Initializer.parameter.mount"></a>

- *Type:* str

The path where the PKI External CA secret backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/data-sources/pki_external_ca_secret_backend_order_challenge#mount DataVaultPkiExternalCaSecretBackendOrderChallenge#mount}

---

##### `order_id`<sup>Required</sup> <a name="order_id" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.Initializer.parameter.orderId"></a>

- *Type:* str

The unique identifier for the ACME order.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/data-sources/pki_external_ca_secret_backend_order_challenge#order_id DataVaultPkiExternalCaSecretBackendOrderChallenge#order_id}

---

##### `role_name`<sup>Required</sup> <a name="role_name" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.Initializer.parameter.roleName"></a>

- *Type:* str

Name of the role associated with the order.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/data-sources/pki_external_ca_secret_backend_order_challenge#role_name DataVaultPkiExternalCaSecretBackendOrderChallenge#role_name}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/data-sources/pki_external_ca_secret_backend_order_challenge#namespace DataVaultPkiExternalCaSecretBackendOrderChallenge#namespace}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.resetNamespace">reset_namespace</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_namespace` <a name="reset_namespace" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.resetNamespace"></a>

```python
def reset_namespace() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataVaultPkiExternalCaSecretBackendOrderChallenge resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.isConstruct"></a>

```python
from cdktn_provider_vault import data_vault_pki_external_ca_secret_backend_order_challenge

dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.isTerraformElement"></a>

```python
from cdktn_provider_vault import data_vault_pki_external_ca_secret_backend_order_challenge

dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.isTerraformDataSource"></a>

```python
from cdktn_provider_vault import data_vault_pki_external_ca_secret_backend_order_challenge

dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.generateConfigForImport"></a>

```python
from cdktn_provider_vault import data_vault_pki_external_ca_secret_backend_order_challenge

dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataVaultPkiExternalCaSecretBackendOrderChallenge resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataVaultPkiExternalCaSecretBackendOrderChallenge to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataVaultPkiExternalCaSecretBackendOrderChallenge that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/data-sources/pki_external_ca_secret_backend_order_challenge#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataVaultPkiExternalCaSecretBackendOrderChallenge to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.expires">expires</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.keyAuthorization">key_authorization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.token">token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.challengeTypeInput">challenge_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.identifierInput">identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.mountInput">mount_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.orderIdInput">order_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.roleNameInput">role_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.challengeType">challenge_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.identifier">identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.mount">mount</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.orderId">order_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.roleName">role_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `expires`<sup>Required</sup> <a name="expires" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.expires"></a>

```python
expires: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `key_authorization`<sup>Required</sup> <a name="key_authorization" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.keyAuthorization"></a>

```python
key_authorization: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.token"></a>

```python
token: str
```

- *Type:* str

---

##### `challenge_type_input`<sup>Optional</sup> <a name="challenge_type_input" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.challengeTypeInput"></a>

```python
challenge_type_input: str
```

- *Type:* str

---

##### `identifier_input`<sup>Optional</sup> <a name="identifier_input" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.identifierInput"></a>

```python
identifier_input: str
```

- *Type:* str

---

##### `mount_input`<sup>Optional</sup> <a name="mount_input" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.mountInput"></a>

```python
mount_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `order_id_input`<sup>Optional</sup> <a name="order_id_input" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.orderIdInput"></a>

```python
order_id_input: str
```

- *Type:* str

---

##### `role_name_input`<sup>Optional</sup> <a name="role_name_input" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.roleNameInput"></a>

```python
role_name_input: str
```

- *Type:* str

---

##### `challenge_type`<sup>Required</sup> <a name="challenge_type" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.challengeType"></a>

```python
challenge_type: str
```

- *Type:* str

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.identifier"></a>

```python
identifier: str
```

- *Type:* str

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.mount"></a>

```python
mount: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `order_id`<sup>Required</sup> <a name="order_id" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.orderId"></a>

```python
order_id: str
```

- *Type:* str

---

##### `role_name`<sup>Required</sup> <a name="role_name" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.roleName"></a>

```python
role_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataVaultPkiExternalCaSecretBackendOrderChallengeConfig <a name="DataVaultPkiExternalCaSecretBackendOrderChallengeConfig" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallengeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallengeConfig.Initializer"></a>

```python
from cdktn_provider_vault import data_vault_pki_external_ca_secret_backend_order_challenge

dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallengeConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  challenge_type: str,
  identifier: str,
  mount: str,
  order_id: str,
  role_name: str,
  namespace: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallengeConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallengeConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallengeConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallengeConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallengeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallengeConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallengeConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallengeConfig.property.challengeType">challenge_type</a></code> | <code>str</code> | The type of ACME challenge to retrieve. Valid values are `http-01`, `dns-01`, `tls-alpn-01`. |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallengeConfig.property.identifier">identifier</a></code> | <code>str</code> | The identifier (domain name) for which to retrieve the challenge. |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallengeConfig.property.mount">mount</a></code> | <code>str</code> | The path where the PKI External CA secret backend is mounted. |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallengeConfig.property.orderId">order_id</a></code> | <code>str</code> | The unique identifier for the ACME order. |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallengeConfig.property.roleName">role_name</a></code> | <code>str</code> | Name of the role associated with the order. |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallengeConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallengeConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallengeConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallengeConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallengeConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallengeConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallengeConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallengeConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `challenge_type`<sup>Required</sup> <a name="challenge_type" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallengeConfig.property.challengeType"></a>

```python
challenge_type: str
```

- *Type:* str

The type of ACME challenge to retrieve. Valid values are `http-01`, `dns-01`, `tls-alpn-01`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/data-sources/pki_external_ca_secret_backend_order_challenge#challenge_type DataVaultPkiExternalCaSecretBackendOrderChallenge#challenge_type}

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallengeConfig.property.identifier"></a>

```python
identifier: str
```

- *Type:* str

The identifier (domain name) for which to retrieve the challenge.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/data-sources/pki_external_ca_secret_backend_order_challenge#identifier DataVaultPkiExternalCaSecretBackendOrderChallenge#identifier}

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallengeConfig.property.mount"></a>

```python
mount: str
```

- *Type:* str

The path where the PKI External CA secret backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/data-sources/pki_external_ca_secret_backend_order_challenge#mount DataVaultPkiExternalCaSecretBackendOrderChallenge#mount}

---

##### `order_id`<sup>Required</sup> <a name="order_id" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallengeConfig.property.orderId"></a>

```python
order_id: str
```

- *Type:* str

The unique identifier for the ACME order.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/data-sources/pki_external_ca_secret_backend_order_challenge#order_id DataVaultPkiExternalCaSecretBackendOrderChallenge#order_id}

---

##### `role_name`<sup>Required</sup> <a name="role_name" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallengeConfig.property.roleName"></a>

```python
role_name: str
```

- *Type:* str

Name of the role associated with the order.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/data-sources/pki_external_ca_secret_backend_order_challenge#role_name DataVaultPkiExternalCaSecretBackendOrderChallenge#role_name}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallengeConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/data-sources/pki_external_ca_secret_backend_order_challenge#namespace DataVaultPkiExternalCaSecretBackendOrderChallenge#namespace}

---



