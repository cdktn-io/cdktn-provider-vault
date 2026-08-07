# `ephemeralVaultGcpServiceAccountKey` Submodule <a name="`ephemeralVaultGcpServiceAccountKey` Submodule" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralVaultGcpServiceAccountKey <a name="EphemeralVaultGcpServiceAccountKey" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/gcp_service_account_key vault_gcp_service_account_key}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v18/ephemeralvaultgcpserviceaccountkey"

ephemeralvaultgcpserviceaccountkey.NewEphemeralVaultGcpServiceAccountKey(scope Construct, id *string, config EphemeralVaultGcpServiceAccountKeyConfig) EphemeralVaultGcpServiceAccountKey
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKeyConfig">EphemeralVaultGcpServiceAccountKeyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKeyConfig">EphemeralVaultGcpServiceAccountKeyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.toTerraform">ToTerraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.resetKeyAlgorithm">ResetKeyAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.resetKeyType">ResetKeyType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.resetMountId">ResetMountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.resetRoleset">ResetRoleset</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.resetStaticAccount">ResetStaticAccount</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this ephemeral resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetKeyAlgorithm` <a name="ResetKeyAlgorithm" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.resetKeyAlgorithm"></a>

```go
func ResetKeyAlgorithm()
```

##### `ResetKeyType` <a name="ResetKeyType" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.resetKeyType"></a>

```go
func ResetKeyType()
```

##### `ResetMountId` <a name="ResetMountId" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.resetMountId"></a>

```go
func ResetMountId()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetRoleset` <a name="ResetRoleset" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.resetRoleset"></a>

```go
func ResetRoleset()
```

##### `ResetStaticAccount` <a name="ResetStaticAccount" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.resetStaticAccount"></a>

```go
func ResetStaticAccount()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.isTerraformEphemeralResource">IsTerraformEphemeralResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v18/ephemeralvaultgcpserviceaccountkey"

ephemeralvaultgcpserviceaccountkey.EphemeralVaultGcpServiceAccountKey_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v18/ephemeralvaultgcpserviceaccountkey"

ephemeralvaultgcpserviceaccountkey.EphemeralVaultGcpServiceAccountKey_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformEphemeralResource` <a name="IsTerraformEphemeralResource" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.isTerraformEphemeralResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v18/ephemeralvaultgcpserviceaccountkey"

ephemeralvaultgcpserviceaccountkey.EphemeralVaultGcpServiceAccountKey_IsTerraformEphemeralResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.leaseDuration">LeaseDuration</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.leaseId">LeaseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.leaseRenewable">LeaseRenewable</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.leaseStartTime">LeaseStartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.privateKeyData">PrivateKeyData</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.privateKeyType">PrivateKeyType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.serviceAccountEmail">ServiceAccountEmail</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.keyAlgorithmInput">KeyAlgorithmInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.keyTypeInput">KeyTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.mountIdInput">MountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.mountInput">MountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.rolesetInput">RolesetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.staticAccountInput">StaticAccountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.keyAlgorithm">KeyAlgorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.keyType">KeyType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.mount">Mount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.mountId">MountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.roleset">Roleset</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.staticAccount">StaticAccount</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.lifecycle"></a>

```go
func Lifecycle() TerraformEphemeralResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformEphemeralResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `LeaseDuration`<sup>Required</sup> <a name="LeaseDuration" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.leaseDuration"></a>

```go
func LeaseDuration() *f64
```

- *Type:* *f64

---

##### `LeaseId`<sup>Required</sup> <a name="LeaseId" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.leaseId"></a>

```go
func LeaseId() *string
```

- *Type:* *string

---

##### `LeaseRenewable`<sup>Required</sup> <a name="LeaseRenewable" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.leaseRenewable"></a>

```go
func LeaseRenewable() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `LeaseStartTime`<sup>Required</sup> <a name="LeaseStartTime" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.leaseStartTime"></a>

```go
func LeaseStartTime() *string
```

- *Type:* *string

---

##### `PrivateKeyData`<sup>Required</sup> <a name="PrivateKeyData" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.privateKeyData"></a>

```go
func PrivateKeyData() *string
```

- *Type:* *string

---

##### `PrivateKeyType`<sup>Required</sup> <a name="PrivateKeyType" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.privateKeyType"></a>

```go
func PrivateKeyType() *string
```

- *Type:* *string

---

##### `ServiceAccountEmail`<sup>Required</sup> <a name="ServiceAccountEmail" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.serviceAccountEmail"></a>

```go
func ServiceAccountEmail() *string
```

- *Type:* *string

---

##### `KeyAlgorithmInput`<sup>Optional</sup> <a name="KeyAlgorithmInput" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.keyAlgorithmInput"></a>

```go
func KeyAlgorithmInput() *string
```

- *Type:* *string

---

##### `KeyTypeInput`<sup>Optional</sup> <a name="KeyTypeInput" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.keyTypeInput"></a>

```go
func KeyTypeInput() *string
```

- *Type:* *string

---

##### `MountIdInput`<sup>Optional</sup> <a name="MountIdInput" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.mountIdInput"></a>

```go
func MountIdInput() *string
```

- *Type:* *string

---

##### `MountInput`<sup>Optional</sup> <a name="MountInput" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.mountInput"></a>

```go
func MountInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `RolesetInput`<sup>Optional</sup> <a name="RolesetInput" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.rolesetInput"></a>

```go
func RolesetInput() *string
```

- *Type:* *string

---

##### `StaticAccountInput`<sup>Optional</sup> <a name="StaticAccountInput" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.staticAccountInput"></a>

```go
func StaticAccountInput() *string
```

- *Type:* *string

---

##### `KeyAlgorithm`<sup>Required</sup> <a name="KeyAlgorithm" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.keyAlgorithm"></a>

```go
func KeyAlgorithm() *string
```

- *Type:* *string

---

##### `KeyType`<sup>Required</sup> <a name="KeyType" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.keyType"></a>

```go
func KeyType() *string
```

- *Type:* *string

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.mount"></a>

```go
func Mount() *string
```

- *Type:* *string

---

##### `MountId`<sup>Required</sup> <a name="MountId" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.mountId"></a>

```go
func MountId() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Roleset`<sup>Required</sup> <a name="Roleset" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.roleset"></a>

```go
func Roleset() *string
```

- *Type:* *string

---

##### `StaticAccount`<sup>Required</sup> <a name="StaticAccount" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.staticAccount"></a>

```go
func StaticAccount() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralVaultGcpServiceAccountKeyConfig <a name="EphemeralVaultGcpServiceAccountKeyConfig" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKeyConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v18/ephemeralvaultgcpserviceaccountkey"

&ephemeralvaultgcpserviceaccountkey.EphemeralVaultGcpServiceAccountKeyConfig {
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformEphemeralResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Mount: *string,
	KeyAlgorithm: *string,
	KeyType: *string,
	MountId: *string,
	Namespace: *string,
	Roleset: *string,
	StaticAccount: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKeyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKeyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKeyConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKeyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKeyConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKeyConfig.property.mount">Mount</a></code> | <code>*string</code> | Mount path for the GCP Secret Backend to read credentials from. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKeyConfig.property.keyAlgorithm">KeyAlgorithm</a></code> | <code>*string</code> | Key algorithm used to generate key. Defaults to 2k RSA key. Accepted values: `KEY_ALG_UNSPECIFIED`, `KEY_ALG_RSA_1024`, `KEY_ALG_RSA_2048`. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKeyConfig.property.keyType">KeyType</a></code> | <code>*string</code> | Private key type to generate. Defaults to JSON credentials file. Accepted values: `TYPE_UNSPECIFIED`, `TYPE_PKCS12_FILE`, `TYPE_GOOGLE_CREDENTIALS_FILE`. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKeyConfig.property.mountId">MountId</a></code> | <code>*string</code> | Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKeyConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKeyConfig.property.roleset">Roleset</a></code> | <code>*string</code> | GCP Secret Roleset to generate credentials for. Mutually exclusive with `static_account`. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKeyConfig.property.staticAccount">StaticAccount</a></code> | <code>*string</code> | GCP Secret Static Account to generate credentials for. Mutually exclusive with `roleset`. |

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKeyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKeyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKeyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKeyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformEphemeralResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformEphemeralResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKeyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKeyConfig.property.mount"></a>

```go
Mount *string
```

- *Type:* *string

Mount path for the GCP Secret Backend to read credentials from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/gcp_service_account_key#mount EphemeralVaultGcpServiceAccountKey#mount}

---

##### `KeyAlgorithm`<sup>Optional</sup> <a name="KeyAlgorithm" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKeyConfig.property.keyAlgorithm"></a>

```go
KeyAlgorithm *string
```

- *Type:* *string

Key algorithm used to generate key. Defaults to 2k RSA key. Accepted values: `KEY_ALG_UNSPECIFIED`, `KEY_ALG_RSA_1024`, `KEY_ALG_RSA_2048`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/gcp_service_account_key#key_algorithm EphemeralVaultGcpServiceAccountKey#key_algorithm}

---

##### `KeyType`<sup>Optional</sup> <a name="KeyType" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKeyConfig.property.keyType"></a>

```go
KeyType *string
```

- *Type:* *string

Private key type to generate. Defaults to JSON credentials file. Accepted values: `TYPE_UNSPECIFIED`, `TYPE_PKCS12_FILE`, `TYPE_GOOGLE_CREDENTIALS_FILE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/gcp_service_account_key#key_type EphemeralVaultGcpServiceAccountKey#key_type}

---

##### `MountId`<sup>Optional</sup> <a name="MountId" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKeyConfig.property.mountId"></a>

```go
MountId *string
```

- *Type:* *string

Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/gcp_service_account_key#mount_id EphemeralVaultGcpServiceAccountKey#mount_id}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKeyConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/gcp_service_account_key#namespace EphemeralVaultGcpServiceAccountKey#namespace}

---

##### `Roleset`<sup>Optional</sup> <a name="Roleset" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKeyConfig.property.roleset"></a>

```go
Roleset *string
```

- *Type:* *string

GCP Secret Roleset to generate credentials for. Mutually exclusive with `static_account`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/gcp_service_account_key#roleset EphemeralVaultGcpServiceAccountKey#roleset}

---

##### `StaticAccount`<sup>Optional</sup> <a name="StaticAccount" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKeyConfig.property.staticAccount"></a>

```go
StaticAccount *string
```

- *Type:* *string

GCP Secret Static Account to generate credentials for. Mutually exclusive with `roleset`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/gcp_service_account_key#static_account EphemeralVaultGcpServiceAccountKey#static_account}

---



