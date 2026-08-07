# `ephemeralVaultApproleAuthBackendRoleSecretId` Submodule <a name="`ephemeralVaultApproleAuthBackendRoleSecretId` Submodule" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralVaultApproleAuthBackendRoleSecretId <a name="EphemeralVaultApproleAuthBackendRoleSecretId" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/approle_auth_backend_role_secret_id vault_approle_auth_backend_role_secret_id}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v18/ephemeralvaultapproleauthbackendrolesecretid"

ephemeralvaultapproleauthbackendrolesecretid.NewEphemeralVaultApproleAuthBackendRoleSecretId(scope Construct, id *string, config EphemeralVaultApproleAuthBackendRoleSecretIdConfig) EphemeralVaultApproleAuthBackendRoleSecretId
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretIdConfig">EphemeralVaultApproleAuthBackendRoleSecretIdConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretIdConfig">EphemeralVaultApproleAuthBackendRoleSecretIdConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.toTerraform">ToTerraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.resetBackend">ResetBackend</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.resetCidrList">ResetCidrList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.resetMetadata">ResetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.resetMountId">ResetMountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.resetNumUses">ResetNumUses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.resetTtl">ResetTtl</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this ephemeral resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetBackend` <a name="ResetBackend" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.resetBackend"></a>

```go
func ResetBackend()
```

##### `ResetCidrList` <a name="ResetCidrList" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.resetCidrList"></a>

```go
func ResetCidrList()
```

##### `ResetMetadata` <a name="ResetMetadata" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.resetMetadata"></a>

```go
func ResetMetadata()
```

##### `ResetMountId` <a name="ResetMountId" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.resetMountId"></a>

```go
func ResetMountId()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetNumUses` <a name="ResetNumUses" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.resetNumUses"></a>

```go
func ResetNumUses()
```

##### `ResetTtl` <a name="ResetTtl" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.resetTtl"></a>

```go
func ResetTtl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.isTerraformEphemeralResource">IsTerraformEphemeralResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v18/ephemeralvaultapproleauthbackendrolesecretid"

ephemeralvaultapproleauthbackendrolesecretid.EphemeralVaultApproleAuthBackendRoleSecretId_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v18/ephemeralvaultapproleauthbackendrolesecretid"

ephemeralvaultapproleauthbackendrolesecretid.EphemeralVaultApproleAuthBackendRoleSecretId_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformEphemeralResource` <a name="IsTerraformEphemeralResource" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.isTerraformEphemeralResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v18/ephemeralvaultapproleauthbackendrolesecretid"

ephemeralvaultapproleauthbackendrolesecretid.EphemeralVaultApproleAuthBackendRoleSecretId_IsTerraformEphemeralResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.accessor">Accessor</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.secretId">SecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.backendInput">BackendInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.cidrListInput">CidrListInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.metadataInput">MetadataInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.mountIdInput">MountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.numUsesInput">NumUsesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.roleNameInput">RoleNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.ttlInput">TtlInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.backend">Backend</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.cidrList">CidrList</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.metadata">Metadata</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.mountId">MountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.numUses">NumUses</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.roleName">RoleName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.ttl">Ttl</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.lifecycle"></a>

```go
func Lifecycle() TerraformEphemeralResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformEphemeralResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Accessor`<sup>Required</sup> <a name="Accessor" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.accessor"></a>

```go
func Accessor() *string
```

- *Type:* *string

---

##### `SecretId`<sup>Required</sup> <a name="SecretId" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.secretId"></a>

```go
func SecretId() *string
```

- *Type:* *string

---

##### `BackendInput`<sup>Optional</sup> <a name="BackendInput" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.backendInput"></a>

```go
func BackendInput() *string
```

- *Type:* *string

---

##### `CidrListInput`<sup>Optional</sup> <a name="CidrListInput" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.cidrListInput"></a>

```go
func CidrListInput() *[]*string
```

- *Type:* *[]*string

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.metadataInput"></a>

```go
func MetadataInput() *string
```

- *Type:* *string

---

##### `MountIdInput`<sup>Optional</sup> <a name="MountIdInput" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.mountIdInput"></a>

```go
func MountIdInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `NumUsesInput`<sup>Optional</sup> <a name="NumUsesInput" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.numUsesInput"></a>

```go
func NumUsesInput() *f64
```

- *Type:* *f64

---

##### `RoleNameInput`<sup>Optional</sup> <a name="RoleNameInput" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.roleNameInput"></a>

```go
func RoleNameInput() *string
```

- *Type:* *string

---

##### `TtlInput`<sup>Optional</sup> <a name="TtlInput" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.ttlInput"></a>

```go
func TtlInput() *f64
```

- *Type:* *f64

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.backend"></a>

```go
func Backend() *string
```

- *Type:* *string

---

##### `CidrList`<sup>Required</sup> <a name="CidrList" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.cidrList"></a>

```go
func CidrList() *[]*string
```

- *Type:* *[]*string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.metadata"></a>

```go
func Metadata() *string
```

- *Type:* *string

---

##### `MountId`<sup>Required</sup> <a name="MountId" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.mountId"></a>

```go
func MountId() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `NumUses`<sup>Required</sup> <a name="NumUses" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.numUses"></a>

```go
func NumUses() *f64
```

- *Type:* *f64

---

##### `RoleName`<sup>Required</sup> <a name="RoleName" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.roleName"></a>

```go
func RoleName() *string
```

- *Type:* *string

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.ttl"></a>

```go
func Ttl() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralVaultApproleAuthBackendRoleSecretIdConfig <a name="EphemeralVaultApproleAuthBackendRoleSecretIdConfig" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretIdConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretIdConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v18/ephemeralvaultapproleauthbackendrolesecretid"

&ephemeralvaultapproleauthbackendrolesecretid.EphemeralVaultApproleAuthBackendRoleSecretIdConfig {
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformEphemeralResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	RoleName: *string,
	Backend: *string,
	CidrList: *[]*string,
	Metadata: *string,
	MountId: *string,
	Namespace: *string,
	NumUses: *f64,
	Ttl: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretIdConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretIdConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretIdConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretIdConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretIdConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretIdConfig.property.roleName">RoleName</a></code> | <code>*string</code> | Name of the role. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretIdConfig.property.backend">Backend</a></code> | <code>*string</code> | Unique name of the auth backend to configure. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretIdConfig.property.cidrList">CidrList</a></code> | <code>*[]*string</code> | List of CIDR blocks that can log in using the SecretID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretIdConfig.property.metadata">Metadata</a></code> | <code>*string</code> | JSON-encoded secret data. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretIdConfig.property.mountId">MountId</a></code> | <code>*string</code> | Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretIdConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretIdConfig.property.numUses">NumUses</a></code> | <code>*f64</code> | The number of uses for the secret-id. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretIdConfig.property.ttl">Ttl</a></code> | <code>*f64</code> | The TTL duration of the SecretID in seconds. |

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretIdConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretIdConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretIdConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretIdConfig.property.lifecycle"></a>

```go
Lifecycle TerraformEphemeralResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformEphemeralResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretIdConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `RoleName`<sup>Required</sup> <a name="RoleName" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretIdConfig.property.roleName"></a>

```go
RoleName *string
```

- *Type:* *string

Name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/approle_auth_backend_role_secret_id#role_name EphemeralVaultApproleAuthBackendRoleSecretId#role_name}

---

##### `Backend`<sup>Optional</sup> <a name="Backend" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretIdConfig.property.backend"></a>

```go
Backend *string
```

- *Type:* *string

Unique name of the auth backend to configure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/approle_auth_backend_role_secret_id#backend EphemeralVaultApproleAuthBackendRoleSecretId#backend}

---

##### `CidrList`<sup>Optional</sup> <a name="CidrList" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretIdConfig.property.cidrList"></a>

```go
CidrList *[]*string
```

- *Type:* *[]*string

List of CIDR blocks that can log in using the SecretID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/approle_auth_backend_role_secret_id#cidr_list EphemeralVaultApproleAuthBackendRoleSecretId#cidr_list}

---

##### `Metadata`<sup>Optional</sup> <a name="Metadata" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretIdConfig.property.metadata"></a>

```go
Metadata *string
```

- *Type:* *string

JSON-encoded secret data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/approle_auth_backend_role_secret_id#metadata EphemeralVaultApproleAuthBackendRoleSecretId#metadata}

---

##### `MountId`<sup>Optional</sup> <a name="MountId" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretIdConfig.property.mountId"></a>

```go
MountId *string
```

- *Type:* *string

Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/approle_auth_backend_role_secret_id#mount_id EphemeralVaultApproleAuthBackendRoleSecretId#mount_id}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretIdConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/approle_auth_backend_role_secret_id#namespace EphemeralVaultApproleAuthBackendRoleSecretId#namespace}

---

##### `NumUses`<sup>Optional</sup> <a name="NumUses" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretIdConfig.property.numUses"></a>

```go
NumUses *f64
```

- *Type:* *f64

The number of uses for the secret-id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/approle_auth_backend_role_secret_id#num_uses EphemeralVaultApproleAuthBackendRoleSecretId#num_uses}

---

##### `Ttl`<sup>Optional</sup> <a name="Ttl" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretIdConfig.property.ttl"></a>

```go
Ttl *f64
```

- *Type:* *f64

The TTL duration of the SecretID in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/approle_auth_backend_role_secret_id#ttl EphemeralVaultApproleAuthBackendRoleSecretId#ttl}

---



