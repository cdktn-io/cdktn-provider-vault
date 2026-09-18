# `pkiExternalCaSecretBackendDnsProviderAwsRoute53` Submodule <a name="`pkiExternalCaSecretBackendDnsProviderAwsRoute53` Submodule" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PkiExternalCaSecretBackendDnsProviderAwsRoute53 <a name="PkiExternalCaSecretBackendDnsProviderAwsRoute53" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_aws_route53 vault_pki_external_ca_secret_backend_dns_provider_aws_route53}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v18/pkiexternalcasecretbackenddnsproviderawsroute53"

pkiexternalcasecretbackenddnsproviderawsroute53.NewPkiExternalCaSecretBackendDnsProviderAwsRoute53(scope Construct, id *string, config PkiExternalCaSecretBackendDnsProviderAwsRoute53Config) PkiExternalCaSecretBackendDnsProviderAwsRoute53
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config">PkiExternalCaSecretBackendDnsProviderAwsRoute53Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config">PkiExternalCaSecretBackendDnsProviderAwsRoute53Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.resetAccessKeyId">ResetAccessKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.resetAssumeRoleArn">ResetAssumeRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.resetExternalId">ResetExternalId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.resetHostedZoneId">ResetHostedZoneId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.resetNameserver">ResetNameserver</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.resetSecretAccessKeyWo">ResetSecretAccessKeyWo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.resetSecretAccessKeyWoVersion">ResetSecretAccessKeyWoVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.resetTtl">ResetTtl</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAccessKeyId` <a name="ResetAccessKeyId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.resetAccessKeyId"></a>

```go
func ResetAccessKeyId()
```

##### `ResetAssumeRoleArn` <a name="ResetAssumeRoleArn" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.resetAssumeRoleArn"></a>

```go
func ResetAssumeRoleArn()
```

##### `ResetExternalId` <a name="ResetExternalId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.resetExternalId"></a>

```go
func ResetExternalId()
```

##### `ResetHostedZoneId` <a name="ResetHostedZoneId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.resetHostedZoneId"></a>

```go
func ResetHostedZoneId()
```

##### `ResetNameserver` <a name="ResetNameserver" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.resetNameserver"></a>

```go
func ResetNameserver()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetSecretAccessKeyWo` <a name="ResetSecretAccessKeyWo" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.resetSecretAccessKeyWo"></a>

```go
func ResetSecretAccessKeyWo()
```

##### `ResetSecretAccessKeyWoVersion` <a name="ResetSecretAccessKeyWoVersion" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.resetSecretAccessKeyWoVersion"></a>

```go
func ResetSecretAccessKeyWoVersion()
```

##### `ResetTtl` <a name="ResetTtl" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.resetTtl"></a>

```go
func ResetTtl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a PkiExternalCaSecretBackendDnsProviderAwsRoute53 resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v18/pkiexternalcasecretbackenddnsproviderawsroute53"

pkiexternalcasecretbackenddnsproviderawsroute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v18/pkiexternalcasecretbackenddnsproviderawsroute53"

pkiexternalcasecretbackenddnsproviderawsroute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v18/pkiexternalcasecretbackenddnsproviderawsroute53"

pkiexternalcasecretbackenddnsproviderawsroute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v18/pkiexternalcasecretbackenddnsproviderawsroute53"

pkiexternalcasecretbackenddnsproviderawsroute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a PkiExternalCaSecretBackendDnsProviderAwsRoute53 resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the PkiExternalCaSecretBackendDnsProviderAwsRoute53 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing PkiExternalCaSecretBackendDnsProviderAwsRoute53 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_aws_route53#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the PkiExternalCaSecretBackendDnsProviderAwsRoute53 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.creationDate">CreationDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.lastUpdatedDate">LastUpdatedDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.accessKeyIdInput">AccessKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.assumeRoleArnInput">AssumeRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.externalIdInput">ExternalIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.hostedZoneIdInput">HostedZoneIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.identifiersInput">IdentifiersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.mountInput">MountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.nameserverInput">NameserverInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.secretAccessKeyWoInput">SecretAccessKeyWoInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.secretAccessKeyWoVersionInput">SecretAccessKeyWoVersionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.ttlInput">TtlInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.accessKeyId">AccessKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.assumeRoleArn">AssumeRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.externalId">ExternalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.hostedZoneId">HostedZoneId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.identifiers">Identifiers</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.mount">Mount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.nameserver">Nameserver</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.secretAccessKeyWo">SecretAccessKeyWo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.secretAccessKeyWoVersion">SecretAccessKeyWoVersion</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.ttl">Ttl</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreationDate`<sup>Required</sup> <a name="CreationDate" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.creationDate"></a>

```go
func CreationDate() *string
```

- *Type:* *string

---

##### `LastUpdatedDate`<sup>Required</sup> <a name="LastUpdatedDate" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.lastUpdatedDate"></a>

```go
func LastUpdatedDate() *string
```

- *Type:* *string

---

##### `AccessKeyIdInput`<sup>Optional</sup> <a name="AccessKeyIdInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.accessKeyIdInput"></a>

```go
func AccessKeyIdInput() *string
```

- *Type:* *string

---

##### `AssumeRoleArnInput`<sup>Optional</sup> <a name="AssumeRoleArnInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.assumeRoleArnInput"></a>

```go
func AssumeRoleArnInput() *string
```

- *Type:* *string

---

##### `ExternalIdInput`<sup>Optional</sup> <a name="ExternalIdInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.externalIdInput"></a>

```go
func ExternalIdInput() *string
```

- *Type:* *string

---

##### `HostedZoneIdInput`<sup>Optional</sup> <a name="HostedZoneIdInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.hostedZoneIdInput"></a>

```go
func HostedZoneIdInput() *string
```

- *Type:* *string

---

##### `IdentifiersInput`<sup>Optional</sup> <a name="IdentifiersInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.identifiersInput"></a>

```go
func IdentifiersInput() *[]*string
```

- *Type:* *[]*string

---

##### `MountInput`<sup>Optional</sup> <a name="MountInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.mountInput"></a>

```go
func MountInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NameserverInput`<sup>Optional</sup> <a name="NameserverInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.nameserverInput"></a>

```go
func NameserverInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `SecretAccessKeyWoInput`<sup>Optional</sup> <a name="SecretAccessKeyWoInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.secretAccessKeyWoInput"></a>

```go
func SecretAccessKeyWoInput() *string
```

- *Type:* *string

---

##### `SecretAccessKeyWoVersionInput`<sup>Optional</sup> <a name="SecretAccessKeyWoVersionInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.secretAccessKeyWoVersionInput"></a>

```go
func SecretAccessKeyWoVersionInput() *f64
```

- *Type:* *f64

---

##### `TtlInput`<sup>Optional</sup> <a name="TtlInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.ttlInput"></a>

```go
func TtlInput() *f64
```

- *Type:* *f64

---

##### `AccessKeyId`<sup>Required</sup> <a name="AccessKeyId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.accessKeyId"></a>

```go
func AccessKeyId() *string
```

- *Type:* *string

---

##### `AssumeRoleArn`<sup>Required</sup> <a name="AssumeRoleArn" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.assumeRoleArn"></a>

```go
func AssumeRoleArn() *string
```

- *Type:* *string

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.externalId"></a>

```go
func ExternalId() *string
```

- *Type:* *string

---

##### `HostedZoneId`<sup>Required</sup> <a name="HostedZoneId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.hostedZoneId"></a>

```go
func HostedZoneId() *string
```

- *Type:* *string

---

##### `Identifiers`<sup>Required</sup> <a name="Identifiers" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.identifiers"></a>

```go
func Identifiers() *[]*string
```

- *Type:* *[]*string

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.mount"></a>

```go
func Mount() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Nameserver`<sup>Required</sup> <a name="Nameserver" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.nameserver"></a>

```go
func Nameserver() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### ~~`SecretAccessKeyWo`~~<sup>Required</sup> <a name="SecretAccessKeyWo" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.secretAccessKeyWo"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```go
func SecretAccessKeyWo() *string
```

- *Type:* *string

---

##### `SecretAccessKeyWoVersion`<sup>Required</sup> <a name="SecretAccessKeyWoVersion" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.secretAccessKeyWoVersion"></a>

```go
func SecretAccessKeyWoVersion() *f64
```

- *Type:* *f64

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.ttl"></a>

```go
func Ttl() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### PkiExternalCaSecretBackendDnsProviderAwsRoute53Config <a name="PkiExternalCaSecretBackendDnsProviderAwsRoute53Config" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v18/pkiexternalcasecretbackenddnsproviderawsroute53"

&pkiexternalcasecretbackenddnsproviderawsroute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Identifiers: *[]*string,
	Mount: *string,
	Name: *string,
	AccessKeyId: *string,
	AssumeRoleArn: *string,
	ExternalId: *string,
	HostedZoneId: *string,
	Nameserver: *string,
	Namespace: *string,
	Region: *string,
	SecretAccessKeyWo: *string,
	SecretAccessKeyWoVersion: *f64,
	Ttl: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.identifiers">Identifiers</a></code> | <code>*[]*string</code> | List of domain identifiers this provider handles. Supports wildcard patterns with leftmost `*` (e.g. `*.example.com`). |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.mount">Mount</a></code> | <code>*string</code> | The path where the PKI External CA secret backend is mounted. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.name">Name</a></code> | <code>*string</code> | Name of the DNS provider configuration. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.accessKeyId">AccessKeyId</a></code> | <code>*string</code> | AWS access key ID for Route53 API access. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.assumeRoleArn">AssumeRoleArn</a></code> | <code>*string</code> | AWS IAM role ARN to assume for Route53 operations. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.externalId">ExternalId</a></code> | <code>*string</code> | External ID for AWS STS AssumeRole. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.hostedZoneId">HostedZoneId</a></code> | <code>*string</code> | AWS Route53 hosted zone ID. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.nameserver">Nameserver</a></code> | <code>*string</code> | Address of a DNS nameserver (`host` or `host:port`) to use when verifying DNS-01 challenge propagation instead of the domain's primary nameserver. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.namespace">Namespace</a></code> | <code>*string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.region">Region</a></code> | <code>*string</code> | AWS region for Route53 operations. Defaults to `us-east-1`. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.secretAccessKeyWo">SecretAccessKeyWo</a></code> | <code>*string</code> | AWS secret access key for Route53 API access. Write-only — not returned by Vault. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.secretAccessKeyWoVersion">SecretAccessKeyWoVersion</a></code> | <code>*f64</code> | Version counter for the write-only `secret_access_key` field. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.ttl">Ttl</a></code> | <code>*f64</code> | TTL for DNS TXT records used in DNS-01 challenges in seconds. Defaults to `60`. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Identifiers`<sup>Required</sup> <a name="Identifiers" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.identifiers"></a>

```go
Identifiers *[]*string
```

- *Type:* *[]*string

List of domain identifiers this provider handles. Supports wildcard patterns with leftmost `*` (e.g. `*.example.com`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_aws_route53#identifiers PkiExternalCaSecretBackendDnsProviderAwsRoute53#identifiers}

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.mount"></a>

```go
Mount *string
```

- *Type:* *string

The path where the PKI External CA secret backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_aws_route53#mount PkiExternalCaSecretBackendDnsProviderAwsRoute53#mount}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the DNS provider configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_aws_route53#name PkiExternalCaSecretBackendDnsProviderAwsRoute53#name}

---

##### `AccessKeyId`<sup>Optional</sup> <a name="AccessKeyId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.accessKeyId"></a>

```go
AccessKeyId *string
```

- *Type:* *string

AWS access key ID for Route53 API access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_aws_route53#access_key_id PkiExternalCaSecretBackendDnsProviderAwsRoute53#access_key_id}

---

##### `AssumeRoleArn`<sup>Optional</sup> <a name="AssumeRoleArn" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.assumeRoleArn"></a>

```go
AssumeRoleArn *string
```

- *Type:* *string

AWS IAM role ARN to assume for Route53 operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_aws_route53#assume_role_arn PkiExternalCaSecretBackendDnsProviderAwsRoute53#assume_role_arn}

---

##### `ExternalId`<sup>Optional</sup> <a name="ExternalId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.externalId"></a>

```go
ExternalId *string
```

- *Type:* *string

External ID for AWS STS AssumeRole.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_aws_route53#external_id PkiExternalCaSecretBackendDnsProviderAwsRoute53#external_id}

---

##### `HostedZoneId`<sup>Optional</sup> <a name="HostedZoneId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.hostedZoneId"></a>

```go
HostedZoneId *string
```

- *Type:* *string

AWS Route53 hosted zone ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_aws_route53#hosted_zone_id PkiExternalCaSecretBackendDnsProviderAwsRoute53#hosted_zone_id}

---

##### `Nameserver`<sup>Optional</sup> <a name="Nameserver" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.nameserver"></a>

```go
Nameserver *string
```

- *Type:* *string

Address of a DNS nameserver (`host` or `host:port`) to use when verifying DNS-01 challenge propagation instead of the domain's primary nameserver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_aws_route53#nameserver PkiExternalCaSecretBackendDnsProviderAwsRoute53#nameserver}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_aws_route53#namespace PkiExternalCaSecretBackendDnsProviderAwsRoute53#namespace}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.region"></a>

```go
Region *string
```

- *Type:* *string

AWS region for Route53 operations. Defaults to `us-east-1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_aws_route53#region PkiExternalCaSecretBackendDnsProviderAwsRoute53#region}

---

##### `SecretAccessKeyWo`<sup>Optional</sup> <a name="SecretAccessKeyWo" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.secretAccessKeyWo"></a>

```go
SecretAccessKeyWo *string
```

- *Type:* *string

AWS secret access key for Route53 API access. Write-only — not returned by Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_aws_route53#secret_access_key_wo PkiExternalCaSecretBackendDnsProviderAwsRoute53#secret_access_key_wo}

---

##### `SecretAccessKeyWoVersion`<sup>Optional</sup> <a name="SecretAccessKeyWoVersion" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.secretAccessKeyWoVersion"></a>

```go
SecretAccessKeyWoVersion *f64
```

- *Type:* *f64

Version counter for the write-only `secret_access_key` field.

Increment this value to trigger an update to the secret access key in Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_aws_route53#secret_access_key_wo_version PkiExternalCaSecretBackendDnsProviderAwsRoute53#secret_access_key_wo_version}

---

##### `Ttl`<sup>Optional</sup> <a name="Ttl" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.ttl"></a>

```go
Ttl *f64
```

- *Type:* *f64

TTL for DNS TXT records used in DNS-01 challenges in seconds. Defaults to `60`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_aws_route53#ttl PkiExternalCaSecretBackendDnsProviderAwsRoute53#ttl}

---



