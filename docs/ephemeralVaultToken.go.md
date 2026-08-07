# `ephemeralVaultToken` Submodule <a name="`ephemeralVaultToken` Submodule" id="@cdktn/provider-vault.ephemeralVaultToken"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralVaultToken <a name="EphemeralVaultToken" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/token vault_token}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v17/ephemeralvaulttoken"

ephemeralvaulttoken.NewEphemeralVaultToken(scope Construct, id *string, config EphemeralVaultTokenConfig) EphemeralVaultToken
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig">EphemeralVaultTokenConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig">EphemeralVaultTokenConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.toTerraform">ToTerraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetEntityAlias">ResetEntityAlias</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetExplicitMaxTtl">ResetExplicitMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetMetadata">ResetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetMountId">ResetMountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetNoDefaultPolicy">ResetNoDefaultPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetNoParent">ResetNoParent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetNumUses">ResetNumUses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetPeriod">ResetPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetPolicies">ResetPolicies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetRenewable">ResetRenewable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetRoleName">ResetRoleName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetTtl">ResetTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetWrappingTtl">ResetWrappingTtl</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this ephemeral resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetEntityAlias` <a name="ResetEntityAlias" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetEntityAlias"></a>

```go
func ResetEntityAlias()
```

##### `ResetExplicitMaxTtl` <a name="ResetExplicitMaxTtl" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetExplicitMaxTtl"></a>

```go
func ResetExplicitMaxTtl()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetId"></a>

```go
func ResetId()
```

##### `ResetMetadata` <a name="ResetMetadata" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetMetadata"></a>

```go
func ResetMetadata()
```

##### `ResetMountId` <a name="ResetMountId" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetMountId"></a>

```go
func ResetMountId()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetNoDefaultPolicy` <a name="ResetNoDefaultPolicy" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetNoDefaultPolicy"></a>

```go
func ResetNoDefaultPolicy()
```

##### `ResetNoParent` <a name="ResetNoParent" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetNoParent"></a>

```go
func ResetNoParent()
```

##### `ResetNumUses` <a name="ResetNumUses" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetNumUses"></a>

```go
func ResetNumUses()
```

##### `ResetPeriod` <a name="ResetPeriod" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetPeriod"></a>

```go
func ResetPeriod()
```

##### `ResetPolicies` <a name="ResetPolicies" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetPolicies"></a>

```go
func ResetPolicies()
```

##### `ResetRenewable` <a name="ResetRenewable" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetRenewable"></a>

```go
func ResetRenewable()
```

##### `ResetRoleName` <a name="ResetRoleName" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetRoleName"></a>

```go
func ResetRoleName()
```

##### `ResetTtl` <a name="ResetTtl" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetTtl"></a>

```go
func ResetTtl()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetType"></a>

```go
func ResetType()
```

##### `ResetWrappingTtl` <a name="ResetWrappingTtl" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetWrappingTtl"></a>

```go
func ResetWrappingTtl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.isTerraformEphemeralResource">IsTerraformEphemeralResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v17/ephemeralvaulttoken"

ephemeralvaulttoken.EphemeralVaultToken_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v17/ephemeralvaulttoken"

ephemeralvaulttoken.EphemeralVaultToken_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformEphemeralResource` <a name="IsTerraformEphemeralResource" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.isTerraformEphemeralResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v17/ephemeralvaulttoken"

ephemeralvaulttoken.EphemeralVaultToken_IsTerraformEphemeralResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.accessor">Accessor</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.clientToken">ClientToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.entityId">EntityId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.leaseDuration">LeaseDuration</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.leaseId">LeaseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.orphan">Orphan</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.tokenPolicies">TokenPolicies</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.wrappedToken">WrappedToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.wrappingAccessor">WrappingAccessor</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.entityAliasInput">EntityAliasInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.explicitMaxTtlInput">ExplicitMaxTtlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.metadataInput">MetadataInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.mountIdInput">MountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.noDefaultPolicyInput">NoDefaultPolicyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.noParentInput">NoParentInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.numUsesInput">NumUsesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.periodInput">PeriodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.policiesInput">PoliciesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.renewableInput">RenewableInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.roleNameInput">RoleNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.ttlInput">TtlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.wrappingTtlInput">WrappingTtlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.entityAlias">EntityAlias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.explicitMaxTtl">ExplicitMaxTtl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.metadata">Metadata</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.mountId">MountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.noDefaultPolicy">NoDefaultPolicy</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.noParent">NoParent</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.numUses">NumUses</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.period">Period</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.policies">Policies</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.renewable">Renewable</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.roleName">RoleName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.ttl">Ttl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.wrappingTtl">WrappingTtl</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.lifecycle"></a>

```go
func Lifecycle() TerraformEphemeralResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformEphemeralResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Accessor`<sup>Required</sup> <a name="Accessor" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.accessor"></a>

```go
func Accessor() *string
```

- *Type:* *string

---

##### `ClientToken`<sup>Required</sup> <a name="ClientToken" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.clientToken"></a>

```go
func ClientToken() *string
```

- *Type:* *string

---

##### `EntityId`<sup>Required</sup> <a name="EntityId" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.entityId"></a>

```go
func EntityId() *string
```

- *Type:* *string

---

##### `LeaseDuration`<sup>Required</sup> <a name="LeaseDuration" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.leaseDuration"></a>

```go
func LeaseDuration() *f64
```

- *Type:* *f64

---

##### `LeaseId`<sup>Required</sup> <a name="LeaseId" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.leaseId"></a>

```go
func LeaseId() *string
```

- *Type:* *string

---

##### `Orphan`<sup>Required</sup> <a name="Orphan" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.orphan"></a>

```go
func Orphan() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `TokenPolicies`<sup>Required</sup> <a name="TokenPolicies" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.tokenPolicies"></a>

```go
func TokenPolicies() *[]*string
```

- *Type:* *[]*string

---

##### `WrappedToken`<sup>Required</sup> <a name="WrappedToken" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.wrappedToken"></a>

```go
func WrappedToken() *string
```

- *Type:* *string

---

##### `WrappingAccessor`<sup>Required</sup> <a name="WrappingAccessor" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.wrappingAccessor"></a>

```go
func WrappingAccessor() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `EntityAliasInput`<sup>Optional</sup> <a name="EntityAliasInput" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.entityAliasInput"></a>

```go
func EntityAliasInput() *string
```

- *Type:* *string

---

##### `ExplicitMaxTtlInput`<sup>Optional</sup> <a name="ExplicitMaxTtlInput" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.explicitMaxTtlInput"></a>

```go
func ExplicitMaxTtlInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.metadataInput"></a>

```go
func MetadataInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `MountIdInput`<sup>Optional</sup> <a name="MountIdInput" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.mountIdInput"></a>

```go
func MountIdInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `NoDefaultPolicyInput`<sup>Optional</sup> <a name="NoDefaultPolicyInput" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.noDefaultPolicyInput"></a>

```go
func NoDefaultPolicyInput() interface{}
```

- *Type:* interface{}

---

##### `NoParentInput`<sup>Optional</sup> <a name="NoParentInput" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.noParentInput"></a>

```go
func NoParentInput() interface{}
```

- *Type:* interface{}

---

##### `NumUsesInput`<sup>Optional</sup> <a name="NumUsesInput" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.numUsesInput"></a>

```go
func NumUsesInput() *f64
```

- *Type:* *f64

---

##### `PeriodInput`<sup>Optional</sup> <a name="PeriodInput" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.periodInput"></a>

```go
func PeriodInput() *string
```

- *Type:* *string

---

##### `PoliciesInput`<sup>Optional</sup> <a name="PoliciesInput" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.policiesInput"></a>

```go
func PoliciesInput() *[]*string
```

- *Type:* *[]*string

---

##### `RenewableInput`<sup>Optional</sup> <a name="RenewableInput" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.renewableInput"></a>

```go
func RenewableInput() interface{}
```

- *Type:* interface{}

---

##### `RoleNameInput`<sup>Optional</sup> <a name="RoleNameInput" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.roleNameInput"></a>

```go
func RoleNameInput() *string
```

- *Type:* *string

---

##### `TtlInput`<sup>Optional</sup> <a name="TtlInput" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.ttlInput"></a>

```go
func TtlInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `WrappingTtlInput`<sup>Optional</sup> <a name="WrappingTtlInput" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.wrappingTtlInput"></a>

```go
func WrappingTtlInput() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `EntityAlias`<sup>Required</sup> <a name="EntityAlias" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.entityAlias"></a>

```go
func EntityAlias() *string
```

- *Type:* *string

---

##### `ExplicitMaxTtl`<sup>Required</sup> <a name="ExplicitMaxTtl" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.explicitMaxTtl"></a>

```go
func ExplicitMaxTtl() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.metadata"></a>

```go
func Metadata() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `MountId`<sup>Required</sup> <a name="MountId" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.mountId"></a>

```go
func MountId() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `NoDefaultPolicy`<sup>Required</sup> <a name="NoDefaultPolicy" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.noDefaultPolicy"></a>

```go
func NoDefaultPolicy() interface{}
```

- *Type:* interface{}

---

##### `NoParent`<sup>Required</sup> <a name="NoParent" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.noParent"></a>

```go
func NoParent() interface{}
```

- *Type:* interface{}

---

##### `NumUses`<sup>Required</sup> <a name="NumUses" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.numUses"></a>

```go
func NumUses() *f64
```

- *Type:* *f64

---

##### `Period`<sup>Required</sup> <a name="Period" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.period"></a>

```go
func Period() *string
```

- *Type:* *string

---

##### `Policies`<sup>Required</sup> <a name="Policies" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.policies"></a>

```go
func Policies() *[]*string
```

- *Type:* *[]*string

---

##### `Renewable`<sup>Required</sup> <a name="Renewable" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.renewable"></a>

```go
func Renewable() interface{}
```

- *Type:* interface{}

---

##### `RoleName`<sup>Required</sup> <a name="RoleName" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.roleName"></a>

```go
func RoleName() *string
```

- *Type:* *string

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.ttl"></a>

```go
func Ttl() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `WrappingTtl`<sup>Required</sup> <a name="WrappingTtl" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.wrappingTtl"></a>

```go
func WrappingTtl() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralVaultTokenConfig <a name="EphemeralVaultTokenConfig" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v17/ephemeralvaulttoken"

&ephemeralvaulttoken.EphemeralVaultTokenConfig {
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformEphemeralResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	DisplayName: *string,
	EntityAlias: *string,
	ExplicitMaxTtl: *string,
	Id: *string,
	Metadata: *map[string]*string,
	MountId: *string,
	Namespace: *string,
	NoDefaultPolicy: interface{},
	NoParent: interface{},
	NumUses: *f64,
	Period: *string,
	Policies: *[]*string,
	Renewable: interface{},
	RoleName: *string,
	Ttl: *string,
	Type: *string,
	WrappingTtl: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | The display name of the token. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.entityAlias">EntityAlias</a></code> | <code>*string</code> | Name of the entity alias to associate with during token creation. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.explicitMaxTtl">ExplicitMaxTtl</a></code> | <code>*string</code> | The explicit max TTL of the token. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.id">Id</a></code> | <code>*string</code> | The ID of the client token. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.metadata">Metadata</a></code> | <code>*map[string]*string</code> | Metadata to be associated with the token. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.mountId">MountId</a></code> | <code>*string</code> | Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.noDefaultPolicy">NoDefaultPolicy</a></code> | <code>interface{}</code> | Flag to disable the default policy. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.noParent">NoParent</a></code> | <code>interface{}</code> | Flag to create a token without parent. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.numUses">NumUses</a></code> | <code>*f64</code> | The number of allowed uses of the token. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.period">Period</a></code> | <code>*string</code> | The period of the token for periodic tokens. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.policies">Policies</a></code> | <code>*[]*string</code> | List of policies to attach to the token. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.renewable">Renewable</a></code> | <code>interface{}</code> | Flag to allow the token to be renewed. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.roleName">RoleName</a></code> | <code>*string</code> | The token role name. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.ttl">Ttl</a></code> | <code>*string</code> | The TTL period of the token. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.type">Type</a></code> | <code>*string</code> | The token type. Can be 'batch' or 'service'. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.wrappingTtl">WrappingTtl</a></code> | <code>*string</code> | The TTL period of the wrapped token. |

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.lifecycle"></a>

```go
Lifecycle TerraformEphemeralResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformEphemeralResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

The display name of the token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/token#display_name EphemeralVaultToken#display_name}

---

##### `EntityAlias`<sup>Optional</sup> <a name="EntityAlias" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.entityAlias"></a>

```go
EntityAlias *string
```

- *Type:* *string

Name of the entity alias to associate with during token creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/token#entity_alias EphemeralVaultToken#entity_alias}

---

##### `ExplicitMaxTtl`<sup>Optional</sup> <a name="ExplicitMaxTtl" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.explicitMaxTtl"></a>

```go
ExplicitMaxTtl *string
```

- *Type:* *string

The explicit max TTL of the token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/token#explicit_max_ttl EphemeralVaultToken#explicit_max_ttl}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

The ID of the client token.

This is an input field, not a resource identifier. Can only be specified by a root token. The ID provided may not contain a '.' character and should not start with the 's.' prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/token#id EphemeralVaultToken#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Metadata`<sup>Optional</sup> <a name="Metadata" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.metadata"></a>

```go
Metadata *map[string]*string
```

- *Type:* *map[string]*string

Metadata to be associated with the token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/token#metadata EphemeralVaultToken#metadata}

---

##### `MountId`<sup>Optional</sup> <a name="MountId" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.mountId"></a>

```go
MountId *string
```

- *Type:* *string

Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/token#mount_id EphemeralVaultToken#mount_id}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/token#namespace EphemeralVaultToken#namespace}

---

##### `NoDefaultPolicy`<sup>Optional</sup> <a name="NoDefaultPolicy" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.noDefaultPolicy"></a>

```go
NoDefaultPolicy interface{}
```

- *Type:* interface{}

Flag to disable the default policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/token#no_default_policy EphemeralVaultToken#no_default_policy}

---

##### `NoParent`<sup>Optional</sup> <a name="NoParent" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.noParent"></a>

```go
NoParent interface{}
```

- *Type:* interface{}

Flag to create a token without parent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/token#no_parent EphemeralVaultToken#no_parent}

---

##### `NumUses`<sup>Optional</sup> <a name="NumUses" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.numUses"></a>

```go
NumUses *f64
```

- *Type:* *f64

The number of allowed uses of the token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/token#num_uses EphemeralVaultToken#num_uses}

---

##### `Period`<sup>Optional</sup> <a name="Period" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.period"></a>

```go
Period *string
```

- *Type:* *string

The period of the token for periodic tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/token#period EphemeralVaultToken#period}

---

##### `Policies`<sup>Optional</sup> <a name="Policies" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.policies"></a>

```go
Policies *[]*string
```

- *Type:* *[]*string

List of policies to attach to the token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/token#policies EphemeralVaultToken#policies}

---

##### `Renewable`<sup>Optional</sup> <a name="Renewable" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.renewable"></a>

```go
Renewable interface{}
```

- *Type:* interface{}

Flag to allow the token to be renewed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/token#renewable EphemeralVaultToken#renewable}

---

##### `RoleName`<sup>Optional</sup> <a name="RoleName" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.roleName"></a>

```go
RoleName *string
```

- *Type:* *string

The token role name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/token#role_name EphemeralVaultToken#role_name}

---

##### `Ttl`<sup>Optional</sup> <a name="Ttl" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.ttl"></a>

```go
Ttl *string
```

- *Type:* *string

The TTL period of the token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/token#ttl EphemeralVaultToken#ttl}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

The token type. Can be 'batch' or 'service'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/token#type EphemeralVaultToken#type}

---

##### `WrappingTtl`<sup>Optional</sup> <a name="WrappingTtl" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.wrappingTtl"></a>

```go
WrappingTtl *string
```

- *Type:* *string

The TTL period of the wrapped token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/token#wrapping_ttl EphemeralVaultToken#wrapping_ttl}

---



