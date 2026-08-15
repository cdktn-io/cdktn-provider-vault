# `ephemeralVaultRadiusAuthLogin` Submodule <a name="`ephemeralVaultRadiusAuthLogin` Submodule" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralVaultRadiusAuthLogin <a name="EphemeralVaultRadiusAuthLogin" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/radius_auth_login vault_radius_auth_login}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.Initializer"></a>

```python
from cdktn_provider_vault import ephemeral_vault_radius_auth_login

ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin(
  scope: Construct,
  id: str,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformEphemeralResourceLifecycle = None,
  provider: TerraformProvider = None,
  mount: str,
  password: str,
  username: str,
  mount_id: str = None,
  namespace: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.Initializer.parameter.mount">mount</a></code> | <code>str</code> | Unique name of the auth backend to login to. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.Initializer.parameter.password">password</a></code> | <code>str</code> | RADIUS password for the user. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.Initializer.parameter.username">username</a></code> | <code>str</code> | RADIUS username to authenticate. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.Initializer.parameter.mountId">mount_id</a></code> | <code>str</code> | Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.Initializer.parameter.mount"></a>

- *Type:* str

Unique name of the auth backend to login to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/radius_auth_login#mount EphemeralVaultRadiusAuthLogin#mount}

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.Initializer.parameter.password"></a>

- *Type:* str

RADIUS password for the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/radius_auth_login#password EphemeralVaultRadiusAuthLogin#password}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.Initializer.parameter.username"></a>

- *Type:* str

RADIUS username to authenticate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/radius_auth_login#username EphemeralVaultRadiusAuthLogin#username}

---

##### `mount_id`<sup>Optional</sup> <a name="mount_id" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.Initializer.parameter.mountId"></a>

- *Type:* str

Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/radius_auth_login#mount_id EphemeralVaultRadiusAuthLogin#mount_id}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/radius_auth_login#namespace EphemeralVaultRadiusAuthLogin#namespace}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.toTerraform">to_terraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.resetMountId">reset_mount_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.resetNamespace">reset_namespace</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this ephemeral resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_mount_id` <a name="reset_mount_id" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.resetMountId"></a>

```python
def reset_mount_id() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.resetNamespace"></a>

```python
def reset_namespace() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.isTerraformEphemeralResource">is_terraform_ephemeral_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.isConstruct"></a>

```python
from cdktn_provider_vault import ephemeral_vault_radius_auth_login

ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.isTerraformElement"></a>

```python
from cdktn_provider_vault import ephemeral_vault_radius_auth_login

ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_ephemeral_resource` <a name="is_terraform_ephemeral_resource" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.isTerraformEphemeralResource"></a>

```python
from cdktn_provider_vault import ephemeral_vault_radius_auth_login

ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.is_terraform_ephemeral_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.accessor">accessor</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.clientToken">client_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.data">data</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.entityId">entity_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.identityPolicies">identity_policies</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.leaseDuration">lease_duration</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.leaseId">lease_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.metadata">metadata</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.mfaRequirement">mfa_requirement</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.orphan">orphan</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.policies">policies</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.renewable">renewable</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.tokenPolicies">token_policies</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.warnings">warnings</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.mountIdInput">mount_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.mountInput">mount_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.mount">mount</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.mountId">mount_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.username">username</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.lifecycle"></a>

```python
lifecycle: TerraformEphemeralResourceLifecycle
```

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `accessor`<sup>Required</sup> <a name="accessor" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.accessor"></a>

```python
accessor: str
```

- *Type:* str

---

##### `client_token`<sup>Required</sup> <a name="client_token" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.clientToken"></a>

```python
client_token: str
```

- *Type:* str

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.data"></a>

```python
data: StringMap
```

- *Type:* cdktn.StringMap

---

##### `entity_id`<sup>Required</sup> <a name="entity_id" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.entityId"></a>

```python
entity_id: str
```

- *Type:* str

---

##### `identity_policies`<sup>Required</sup> <a name="identity_policies" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.identityPolicies"></a>

```python
identity_policies: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `lease_duration`<sup>Required</sup> <a name="lease_duration" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.leaseDuration"></a>

```python
lease_duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `lease_id`<sup>Required</sup> <a name="lease_id" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.leaseId"></a>

```python
lease_id: str
```

- *Type:* str

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.metadata"></a>

```python
metadata: StringMap
```

- *Type:* cdktn.StringMap

---

##### `mfa_requirement`<sup>Required</sup> <a name="mfa_requirement" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.mfaRequirement"></a>

```python
mfa_requirement: str
```

- *Type:* str

---

##### `orphan`<sup>Required</sup> <a name="orphan" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.orphan"></a>

```python
orphan: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.policies"></a>

```python
policies: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `renewable`<sup>Required</sup> <a name="renewable" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.renewable"></a>

```python
renewable: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `token_policies`<sup>Required</sup> <a name="token_policies" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.tokenPolicies"></a>

```python
token_policies: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `warnings`<sup>Required</sup> <a name="warnings" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.warnings"></a>

```python
warnings: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `mount_id_input`<sup>Optional</sup> <a name="mount_id_input" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.mountIdInput"></a>

```python
mount_id_input: str
```

- *Type:* str

---

##### `mount_input`<sup>Optional</sup> <a name="mount_input" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.mountInput"></a>

```python
mount_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.mount"></a>

```python
mount: str
```

- *Type:* str

---

##### `mount_id`<sup>Required</sup> <a name="mount_id" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.mountId"></a>

```python
mount_id: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.username"></a>

```python
username: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralVaultRadiusAuthLoginConfig <a name="EphemeralVaultRadiusAuthLoginConfig" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLoginConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLoginConfig.Initializer"></a>

```python
from cdktn_provider_vault import ephemeral_vault_radius_auth_login

ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLoginConfig(
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformEphemeralResourceLifecycle = None,
  provider: TerraformProvider = None,
  mount: str,
  password: str,
  username: str,
  mount_id: str = None,
  namespace: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLoginConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLoginConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLoginConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLoginConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLoginConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLoginConfig.property.mount">mount</a></code> | <code>str</code> | Unique name of the auth backend to login to. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLoginConfig.property.password">password</a></code> | <code>str</code> | RADIUS password for the user. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLoginConfig.property.username">username</a></code> | <code>str</code> | RADIUS username to authenticate. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLoginConfig.property.mountId">mount_id</a></code> | <code>str</code> | Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLoginConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLoginConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLoginConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLoginConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLoginConfig.property.lifecycle"></a>

```python
lifecycle: TerraformEphemeralResourceLifecycle
```

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLoginConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLoginConfig.property.mount"></a>

```python
mount: str
```

- *Type:* str

Unique name of the auth backend to login to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/radius_auth_login#mount EphemeralVaultRadiusAuthLogin#mount}

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLoginConfig.property.password"></a>

```python
password: str
```

- *Type:* str

RADIUS password for the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/radius_auth_login#password EphemeralVaultRadiusAuthLogin#password}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLoginConfig.property.username"></a>

```python
username: str
```

- *Type:* str

RADIUS username to authenticate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/radius_auth_login#username EphemeralVaultRadiusAuthLogin#username}

---

##### `mount_id`<sup>Optional</sup> <a name="mount_id" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLoginConfig.property.mountId"></a>

```python
mount_id: str
```

- *Type:* str

Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/radius_auth_login#mount_id EphemeralVaultRadiusAuthLogin#mount_id}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLoginConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/radius_auth_login#namespace EphemeralVaultRadiusAuthLogin#namespace}

---



