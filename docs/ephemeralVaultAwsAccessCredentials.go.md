# `ephemeralVaultAwsAccessCredentials` Submodule <a name="`ephemeralVaultAwsAccessCredentials` Submodule" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralVaultAwsAccessCredentials <a name="EphemeralVaultAwsAccessCredentials" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/aws_access_credentials vault_aws_access_credentials}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v18/ephemeralvaultawsaccesscredentials"

ephemeralvaultawsaccesscredentials.NewEphemeralVaultAwsAccessCredentials(scope Construct, id *string, config EphemeralVaultAwsAccessCredentialsConfig) EphemeralVaultAwsAccessCredentials
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentialsConfig">EphemeralVaultAwsAccessCredentialsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentialsConfig">EphemeralVaultAwsAccessCredentialsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.toTerraform">ToTerraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.resetMountId">ResetMountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.resetRoleArn">ResetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.resetTtl">ResetTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.resetType">ResetType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this ephemeral resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetMountId` <a name="ResetMountId" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.resetMountId"></a>

```go
func ResetMountId()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.resetRoleArn"></a>

```go
func ResetRoleArn()
```

##### `ResetTtl` <a name="ResetTtl" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.resetTtl"></a>

```go
func ResetTtl()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.resetType"></a>

```go
func ResetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.isTerraformEphemeralResource">IsTerraformEphemeralResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v18/ephemeralvaultawsaccesscredentials"

ephemeralvaultawsaccesscredentials.EphemeralVaultAwsAccessCredentials_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v18/ephemeralvaultawsaccesscredentials"

ephemeralvaultawsaccesscredentials.EphemeralVaultAwsAccessCredentials_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformEphemeralResource` <a name="IsTerraformEphemeralResource" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.isTerraformEphemeralResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v18/ephemeralvaultawsaccesscredentials"

ephemeralvaultawsaccesscredentials.EphemeralVaultAwsAccessCredentials_IsTerraformEphemeralResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.accessKey">AccessKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.leaseDuration">LeaseDuration</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.leaseId">LeaseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.leaseRenewable">LeaseRenewable</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.leaseStartTime">LeaseStartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.secretKey">SecretKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.securityToken">SecurityToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.mountIdInput">MountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.mountInput">MountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.roleArnInput">RoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.roleInput">RoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.ttlInput">TtlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.mount">Mount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.mountId">MountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.role">Role</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.ttl">Ttl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.type">Type</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.lifecycle"></a>

```go
func Lifecycle() TerraformEphemeralResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformEphemeralResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `AccessKey`<sup>Required</sup> <a name="AccessKey" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.accessKey"></a>

```go
func AccessKey() *string
```

- *Type:* *string

---

##### `LeaseDuration`<sup>Required</sup> <a name="LeaseDuration" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.leaseDuration"></a>

```go
func LeaseDuration() *f64
```

- *Type:* *f64

---

##### `LeaseId`<sup>Required</sup> <a name="LeaseId" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.leaseId"></a>

```go
func LeaseId() *string
```

- *Type:* *string

---

##### `LeaseRenewable`<sup>Required</sup> <a name="LeaseRenewable" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.leaseRenewable"></a>

```go
func LeaseRenewable() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `LeaseStartTime`<sup>Required</sup> <a name="LeaseStartTime" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.leaseStartTime"></a>

```go
func LeaseStartTime() *string
```

- *Type:* *string

---

##### `SecretKey`<sup>Required</sup> <a name="SecretKey" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.secretKey"></a>

```go
func SecretKey() *string
```

- *Type:* *string

---

##### `SecurityToken`<sup>Required</sup> <a name="SecurityToken" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.securityToken"></a>

```go
func SecurityToken() *string
```

- *Type:* *string

---

##### `MountIdInput`<sup>Optional</sup> <a name="MountIdInput" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.mountIdInput"></a>

```go
func MountIdInput() *string
```

- *Type:* *string

---

##### `MountInput`<sup>Optional</sup> <a name="MountInput" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.mountInput"></a>

```go
func MountInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.roleArnInput"></a>

```go
func RoleArnInput() *string
```

- *Type:* *string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.roleInput"></a>

```go
func RoleInput() *string
```

- *Type:* *string

---

##### `TtlInput`<sup>Optional</sup> <a name="TtlInput" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.ttlInput"></a>

```go
func TtlInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.mount"></a>

```go
func Mount() *string
```

- *Type:* *string

---

##### `MountId`<sup>Required</sup> <a name="MountId" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.mountId"></a>

```go
func MountId() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.ttl"></a>

```go
func Ttl() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralVaultAwsAccessCredentialsConfig <a name="EphemeralVaultAwsAccessCredentialsConfig" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentialsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentialsConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v18/ephemeralvaultawsaccesscredentials"

&ephemeralvaultawsaccesscredentials.EphemeralVaultAwsAccessCredentialsConfig {
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformEphemeralResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Mount: *string,
	Role: *string,
	MountId: *string,
	Namespace: *string,
	Region: *string,
	RoleArn: *string,
	Ttl: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentialsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentialsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentialsConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentialsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentialsConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentialsConfig.property.mount">Mount</a></code> | <code>*string</code> | Mount path for the AWS secret engine in Vault. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentialsConfig.property.role">Role</a></code> | <code>*string</code> | AWS Secret Role to read credentials from. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentialsConfig.property.mountId">MountId</a></code> | <code>*string</code> | Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentialsConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentialsConfig.property.region">Region</a></code> | <code>*string</code> | Region the read credentials belong to. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentialsConfig.property.roleArn">RoleArn</a></code> | <code>*string</code> | ARN to use if multiple are available in the role. Required if the role has multiple ARNs. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentialsConfig.property.ttl">Ttl</a></code> | <code>*string</code> | User specified Time-To-Live for the STS token. Uses the Role defined default_sts_ttl when not specified. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentialsConfig.property.type">Type</a></code> | <code>*string</code> | Type of credentials to read. Must be either 'creds' for Access Key and Secret Key, or 'sts' for STS. |

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentialsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentialsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentialsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentialsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformEphemeralResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformEphemeralResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentialsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentialsConfig.property.mount"></a>

```go
Mount *string
```

- *Type:* *string

Mount path for the AWS secret engine in Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/aws_access_credentials#mount EphemeralVaultAwsAccessCredentials#mount}

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentialsConfig.property.role"></a>

```go
Role *string
```

- *Type:* *string

AWS Secret Role to read credentials from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/aws_access_credentials#role EphemeralVaultAwsAccessCredentials#role}

---

##### `MountId`<sup>Optional</sup> <a name="MountId" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentialsConfig.property.mountId"></a>

```go
MountId *string
```

- *Type:* *string

Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/aws_access_credentials#mount_id EphemeralVaultAwsAccessCredentials#mount_id}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentialsConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/aws_access_credentials#namespace EphemeralVaultAwsAccessCredentials#namespace}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentialsConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region the read credentials belong to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/aws_access_credentials#region EphemeralVaultAwsAccessCredentials#region}

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentialsConfig.property.roleArn"></a>

```go
RoleArn *string
```

- *Type:* *string

ARN to use if multiple are available in the role. Required if the role has multiple ARNs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/aws_access_credentials#role_arn EphemeralVaultAwsAccessCredentials#role_arn}

---

##### `Ttl`<sup>Optional</sup> <a name="Ttl" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentialsConfig.property.ttl"></a>

```go
Ttl *string
```

- *Type:* *string

User specified Time-To-Live for the STS token. Uses the Role defined default_sts_ttl when not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/aws_access_credentials#ttl EphemeralVaultAwsAccessCredentials#ttl}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentialsConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

Type of credentials to read. Must be either 'creds' for Access Key and Secret Key, or 'sts' for STS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/aws_access_credentials#type EphemeralVaultAwsAccessCredentials#type}

---



