# `ephemeralVaultAlicloudAccessCredentials` Submodule <a name="`ephemeralVaultAlicloudAccessCredentials` Submodule" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralVaultAlicloudAccessCredentials <a name="EphemeralVaultAlicloudAccessCredentials" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/alicloud_access_credentials vault_alicloud_access_credentials}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.Initializer"></a>

```python
from cdktn_provider_vault import ephemeral_vault_alicloud_access_credentials

ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials(
  scope: Construct,
  id: str,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformEphemeralResourceLifecycle = None,
  provider: TerraformProvider = None,
  mount: str,
  role: str,
  mount_id: str = None,
  namespace: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.Initializer.parameter.mount">mount</a></code> | <code>str</code> | Mount path for the AliCloud secret engine in Vault. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.Initializer.parameter.role">role</a></code> | <code>str</code> | AliCloud Secret Role to read credentials from. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.Initializer.parameter.mountId">mount_id</a></code> | <code>str</code> | Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.Initializer.parameter.mount"></a>

- *Type:* str

Mount path for the AliCloud secret engine in Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/alicloud_access_credentials#mount EphemeralVaultAlicloudAccessCredentials#mount}

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.Initializer.parameter.role"></a>

- *Type:* str

AliCloud Secret Role to read credentials from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/alicloud_access_credentials#role EphemeralVaultAlicloudAccessCredentials#role}

---

##### `mount_id`<sup>Optional</sup> <a name="mount_id" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.Initializer.parameter.mountId"></a>

- *Type:* str

Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/alicloud_access_credentials#mount_id EphemeralVaultAlicloudAccessCredentials#mount_id}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/alicloud_access_credentials#namespace EphemeralVaultAlicloudAccessCredentials#namespace}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.toTerraform">to_terraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.resetMountId">reset_mount_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.resetNamespace">reset_namespace</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this ephemeral resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_mount_id` <a name="reset_mount_id" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.resetMountId"></a>

```python
def reset_mount_id() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.resetNamespace"></a>

```python
def reset_namespace() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.isTerraformEphemeralResource">is_terraform_ephemeral_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.isConstruct"></a>

```python
from cdktn_provider_vault import ephemeral_vault_alicloud_access_credentials

ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.isTerraformElement"></a>

```python
from cdktn_provider_vault import ephemeral_vault_alicloud_access_credentials

ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_ephemeral_resource` <a name="is_terraform_ephemeral_resource" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.isTerraformEphemeralResource"></a>

```python
from cdktn_provider_vault import ephemeral_vault_alicloud_access_credentials

ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.is_terraform_ephemeral_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.property.accessKey">access_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.property.expiration">expiration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.property.leaseDuration">lease_duration</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.property.leaseId">lease_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.property.leaseRenewable">lease_renewable</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.property.leaseStartTime">lease_start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.property.secretKey">secret_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.property.securityToken">security_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.property.mountIdInput">mount_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.property.mountInput">mount_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.property.roleInput">role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.property.mount">mount</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.property.mountId">mount_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.property.role">role</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.property.lifecycle"></a>

```python
lifecycle: TerraformEphemeralResourceLifecycle
```

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `access_key`<sup>Required</sup> <a name="access_key" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.property.accessKey"></a>

```python
access_key: str
```

- *Type:* str

---

##### `expiration`<sup>Required</sup> <a name="expiration" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.property.expiration"></a>

```python
expiration: str
```

- *Type:* str

---

##### `lease_duration`<sup>Required</sup> <a name="lease_duration" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.property.leaseDuration"></a>

```python
lease_duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `lease_id`<sup>Required</sup> <a name="lease_id" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.property.leaseId"></a>

```python
lease_id: str
```

- *Type:* str

---

##### `lease_renewable`<sup>Required</sup> <a name="lease_renewable" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.property.leaseRenewable"></a>

```python
lease_renewable: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `lease_start_time`<sup>Required</sup> <a name="lease_start_time" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.property.leaseStartTime"></a>

```python
lease_start_time: str
```

- *Type:* str

---

##### `secret_key`<sup>Required</sup> <a name="secret_key" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.property.secretKey"></a>

```python
secret_key: str
```

- *Type:* str

---

##### `security_token`<sup>Required</sup> <a name="security_token" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.property.securityToken"></a>

```python
security_token: str
```

- *Type:* str

---

##### `mount_id_input`<sup>Optional</sup> <a name="mount_id_input" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.property.mountIdInput"></a>

```python
mount_id_input: str
```

- *Type:* str

---

##### `mount_input`<sup>Optional</sup> <a name="mount_input" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.property.mountInput"></a>

```python
mount_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `role_input`<sup>Optional</sup> <a name="role_input" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.property.roleInput"></a>

```python
role_input: str
```

- *Type:* str

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.property.mount"></a>

```python
mount: str
```

- *Type:* str

---

##### `mount_id`<sup>Required</sup> <a name="mount_id" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.property.mountId"></a>

```python
mount_id: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.property.role"></a>

```python
role: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralVaultAlicloudAccessCredentialsConfig <a name="EphemeralVaultAlicloudAccessCredentialsConfig" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentialsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentialsConfig.Initializer"></a>

```python
from cdktn_provider_vault import ephemeral_vault_alicloud_access_credentials

ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentialsConfig(
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformEphemeralResourceLifecycle = None,
  provider: TerraformProvider = None,
  mount: str,
  role: str,
  mount_id: str = None,
  namespace: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentialsConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentialsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentialsConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentialsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentialsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentialsConfig.property.mount">mount</a></code> | <code>str</code> | Mount path for the AliCloud secret engine in Vault. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentialsConfig.property.role">role</a></code> | <code>str</code> | AliCloud Secret Role to read credentials from. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentialsConfig.property.mountId">mount_id</a></code> | <code>str</code> | Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentialsConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentialsConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentialsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentialsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentialsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformEphemeralResourceLifecycle
```

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentialsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentialsConfig.property.mount"></a>

```python
mount: str
```

- *Type:* str

Mount path for the AliCloud secret engine in Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/alicloud_access_credentials#mount EphemeralVaultAlicloudAccessCredentials#mount}

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentialsConfig.property.role"></a>

```python
role: str
```

- *Type:* str

AliCloud Secret Role to read credentials from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/alicloud_access_credentials#role EphemeralVaultAlicloudAccessCredentials#role}

---

##### `mount_id`<sup>Optional</sup> <a name="mount_id" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentialsConfig.property.mountId"></a>

```python
mount_id: str
```

- *Type:* str

Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/alicloud_access_credentials#mount_id EphemeralVaultAlicloudAccessCredentials#mount_id}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentialsConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/alicloud_access_credentials#namespace EphemeralVaultAlicloudAccessCredentials#namespace}

---



