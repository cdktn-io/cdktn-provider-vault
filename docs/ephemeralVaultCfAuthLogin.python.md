# `ephemeralVaultCfAuthLogin` Submodule <a name="`ephemeralVaultCfAuthLogin` Submodule" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralVaultCfAuthLogin <a name="EphemeralVaultCfAuthLogin" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/cf_auth_login vault_cf_auth_login}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.Initializer"></a>

```python
from cdktn_provider_vault import ephemeral_vault_cf_auth_login

ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin(
  scope: Construct,
  id: str,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformEphemeralResourceLifecycle = None,
  provider: TerraformProvider = None,
  cf_instance_cert: str,
  role: str,
  signature: str,
  signing_time: str,
  mount: str = None,
  mount_id: str = None,
  namespace: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.Initializer.parameter.cfInstanceCert">cf_instance_cert</a></code> | <code>str</code> | The full body of the file available at the path denoted by `CF_INSTANCE_CERT`. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.Initializer.parameter.role">role</a></code> | <code>str</code> | Name of the CF auth role to log in with. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.Initializer.parameter.signature">signature</a></code> | <code>str</code> | The RSA-PSS/SHA256 signature generated using `CF_INSTANCE_KEY` over the concatenation of signing_time, cf_instance_cert, and role. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.Initializer.parameter.signingTime">signing_time</a></code> | <code>str</code> | The date and time used to construct the signature (e.g. `2006-01-02T15:04:05Z`). |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.Initializer.parameter.mount">mount</a></code> | <code>str</code> | Mount path for the CF auth engine in Vault. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.Initializer.parameter.mountId">mount_id</a></code> | <code>str</code> | Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `cf_instance_cert`<sup>Required</sup> <a name="cf_instance_cert" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.Initializer.parameter.cfInstanceCert"></a>

- *Type:* str

The full body of the file available at the path denoted by `CF_INSTANCE_CERT`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/cf_auth_login#cf_instance_cert EphemeralVaultCfAuthLogin#cf_instance_cert}

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.Initializer.parameter.role"></a>

- *Type:* str

Name of the CF auth role to log in with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/cf_auth_login#role EphemeralVaultCfAuthLogin#role}

---

##### `signature`<sup>Required</sup> <a name="signature" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.Initializer.parameter.signature"></a>

- *Type:* str

The RSA-PSS/SHA256 signature generated using `CF_INSTANCE_KEY` over the concatenation of signing_time, cf_instance_cert, and role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/cf_auth_login#signature EphemeralVaultCfAuthLogin#signature}

---

##### `signing_time`<sup>Required</sup> <a name="signing_time" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.Initializer.parameter.signingTime"></a>

- *Type:* str

The date and time used to construct the signature (e.g. `2006-01-02T15:04:05Z`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/cf_auth_login#signing_time EphemeralVaultCfAuthLogin#signing_time}

---

##### `mount`<sup>Optional</sup> <a name="mount" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.Initializer.parameter.mount"></a>

- *Type:* str

Mount path for the CF auth engine in Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/cf_auth_login#mount EphemeralVaultCfAuthLogin#mount}

---

##### `mount_id`<sup>Optional</sup> <a name="mount_id" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.Initializer.parameter.mountId"></a>

- *Type:* str

Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/cf_auth_login#mount_id EphemeralVaultCfAuthLogin#mount_id}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/cf_auth_login#namespace EphemeralVaultCfAuthLogin#namespace}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.toTerraform">to_terraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.resetMount">reset_mount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.resetMountId">reset_mount_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.resetNamespace">reset_namespace</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this ephemeral resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_mount` <a name="reset_mount" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.resetMount"></a>

```python
def reset_mount() -> None
```

##### `reset_mount_id` <a name="reset_mount_id" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.resetMountId"></a>

```python
def reset_mount_id() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.resetNamespace"></a>

```python
def reset_namespace() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.isTerraformEphemeralResource">is_terraform_ephemeral_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.isConstruct"></a>

```python
from cdktn_provider_vault import ephemeral_vault_cf_auth_login

ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.isTerraformElement"></a>

```python
from cdktn_provider_vault import ephemeral_vault_cf_auth_login

ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_ephemeral_resource` <a name="is_terraform_ephemeral_resource" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.isTerraformEphemeralResource"></a>

```python
from cdktn_provider_vault import ephemeral_vault_cf_auth_login

ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.is_terraform_ephemeral_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.accessor">accessor</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.clientToken">client_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.leaseDuration">lease_duration</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.policies">policies</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.renewable">renewable</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.cfInstanceCertInput">cf_instance_cert_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.mountIdInput">mount_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.mountInput">mount_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.roleInput">role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.signatureInput">signature_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.signingTimeInput">signing_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.cfInstanceCert">cf_instance_cert</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.mount">mount</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.mountId">mount_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.signature">signature</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.signingTime">signing_time</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.lifecycle"></a>

```python
lifecycle: TerraformEphemeralResourceLifecycle
```

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `accessor`<sup>Required</sup> <a name="accessor" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.accessor"></a>

```python
accessor: str
```

- *Type:* str

---

##### `client_token`<sup>Required</sup> <a name="client_token" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.clientToken"></a>

```python
client_token: str
```

- *Type:* str

---

##### `lease_duration`<sup>Required</sup> <a name="lease_duration" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.leaseDuration"></a>

```python
lease_duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.policies"></a>

```python
policies: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `renewable`<sup>Required</sup> <a name="renewable" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.renewable"></a>

```python
renewable: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `cf_instance_cert_input`<sup>Optional</sup> <a name="cf_instance_cert_input" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.cfInstanceCertInput"></a>

```python
cf_instance_cert_input: str
```

- *Type:* str

---

##### `mount_id_input`<sup>Optional</sup> <a name="mount_id_input" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.mountIdInput"></a>

```python
mount_id_input: str
```

- *Type:* str

---

##### `mount_input`<sup>Optional</sup> <a name="mount_input" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.mountInput"></a>

```python
mount_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `role_input`<sup>Optional</sup> <a name="role_input" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.roleInput"></a>

```python
role_input: str
```

- *Type:* str

---

##### `signature_input`<sup>Optional</sup> <a name="signature_input" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.signatureInput"></a>

```python
signature_input: str
```

- *Type:* str

---

##### `signing_time_input`<sup>Optional</sup> <a name="signing_time_input" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.signingTimeInput"></a>

```python
signing_time_input: str
```

- *Type:* str

---

##### `cf_instance_cert`<sup>Required</sup> <a name="cf_instance_cert" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.cfInstanceCert"></a>

```python
cf_instance_cert: str
```

- *Type:* str

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.mount"></a>

```python
mount: str
```

- *Type:* str

---

##### `mount_id`<sup>Required</sup> <a name="mount_id" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.mountId"></a>

```python
mount_id: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `signature`<sup>Required</sup> <a name="signature" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.signature"></a>

```python
signature: str
```

- *Type:* str

---

##### `signing_time`<sup>Required</sup> <a name="signing_time" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.signingTime"></a>

```python
signing_time: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralVaultCfAuthLoginConfig <a name="EphemeralVaultCfAuthLoginConfig" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLoginConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLoginConfig.Initializer"></a>

```python
from cdktn_provider_vault import ephemeral_vault_cf_auth_login

ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLoginConfig(
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformEphemeralResourceLifecycle = None,
  provider: TerraformProvider = None,
  cf_instance_cert: str,
  role: str,
  signature: str,
  signing_time: str,
  mount: str = None,
  mount_id: str = None,
  namespace: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLoginConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLoginConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLoginConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLoginConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLoginConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLoginConfig.property.cfInstanceCert">cf_instance_cert</a></code> | <code>str</code> | The full body of the file available at the path denoted by `CF_INSTANCE_CERT`. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLoginConfig.property.role">role</a></code> | <code>str</code> | Name of the CF auth role to log in with. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLoginConfig.property.signature">signature</a></code> | <code>str</code> | The RSA-PSS/SHA256 signature generated using `CF_INSTANCE_KEY` over the concatenation of signing_time, cf_instance_cert, and role. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLoginConfig.property.signingTime">signing_time</a></code> | <code>str</code> | The date and time used to construct the signature (e.g. `2006-01-02T15:04:05Z`). |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLoginConfig.property.mount">mount</a></code> | <code>str</code> | Mount path for the CF auth engine in Vault. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLoginConfig.property.mountId">mount_id</a></code> | <code>str</code> | Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLoginConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLoginConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLoginConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLoginConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLoginConfig.property.lifecycle"></a>

```python
lifecycle: TerraformEphemeralResourceLifecycle
```

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLoginConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `cf_instance_cert`<sup>Required</sup> <a name="cf_instance_cert" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLoginConfig.property.cfInstanceCert"></a>

```python
cf_instance_cert: str
```

- *Type:* str

The full body of the file available at the path denoted by `CF_INSTANCE_CERT`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/cf_auth_login#cf_instance_cert EphemeralVaultCfAuthLogin#cf_instance_cert}

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLoginConfig.property.role"></a>

```python
role: str
```

- *Type:* str

Name of the CF auth role to log in with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/cf_auth_login#role EphemeralVaultCfAuthLogin#role}

---

##### `signature`<sup>Required</sup> <a name="signature" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLoginConfig.property.signature"></a>

```python
signature: str
```

- *Type:* str

The RSA-PSS/SHA256 signature generated using `CF_INSTANCE_KEY` over the concatenation of signing_time, cf_instance_cert, and role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/cf_auth_login#signature EphemeralVaultCfAuthLogin#signature}

---

##### `signing_time`<sup>Required</sup> <a name="signing_time" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLoginConfig.property.signingTime"></a>

```python
signing_time: str
```

- *Type:* str

The date and time used to construct the signature (e.g. `2006-01-02T15:04:05Z`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/cf_auth_login#signing_time EphemeralVaultCfAuthLogin#signing_time}

---

##### `mount`<sup>Optional</sup> <a name="mount" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLoginConfig.property.mount"></a>

```python
mount: str
```

- *Type:* str

Mount path for the CF auth engine in Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/cf_auth_login#mount EphemeralVaultCfAuthLogin#mount}

---

##### `mount_id`<sup>Optional</sup> <a name="mount_id" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLoginConfig.property.mountId"></a>

```python
mount_id: str
```

- *Type:* str

Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/cf_auth_login#mount_id EphemeralVaultCfAuthLogin#mount_id}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLoginConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/cf_auth_login#namespace EphemeralVaultCfAuthLogin#namespace}

---



