# `pkiExternalCaSecretBackendDnsProviderAwsRoute53` Submodule <a name="`pkiExternalCaSecretBackendDnsProviderAwsRoute53` Submodule" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PkiExternalCaSecretBackendDnsProviderAwsRoute53 <a name="PkiExternalCaSecretBackendDnsProviderAwsRoute53" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_aws_route53 vault_pki_external_ca_secret_backend_dns_provider_aws_route53}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.Initializer"></a>

```typescript
import { pkiExternalCaSecretBackendDnsProviderAwsRoute53 } from '@cdktn/provider-vault'

new pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53(scope: Construct, id: string, config: PkiExternalCaSecretBackendDnsProviderAwsRoute53Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config">PkiExternalCaSecretBackendDnsProviderAwsRoute53Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config">PkiExternalCaSecretBackendDnsProviderAwsRoute53Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.resetAccessKeyId">resetAccessKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.resetAssumeRoleArn">resetAssumeRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.resetExternalId">resetExternalId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.resetHostedZoneId">resetHostedZoneId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.resetNameserver">resetNameserver</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.resetSecretAccessKeyWo">resetSecretAccessKeyWo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.resetSecretAccessKeyWoVersion">resetSecretAccessKeyWoVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.resetTtl">resetTtl</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAccessKeyId` <a name="resetAccessKeyId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.resetAccessKeyId"></a>

```typescript
public resetAccessKeyId(): void
```

##### `resetAssumeRoleArn` <a name="resetAssumeRoleArn" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.resetAssumeRoleArn"></a>

```typescript
public resetAssumeRoleArn(): void
```

##### `resetExternalId` <a name="resetExternalId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.resetExternalId"></a>

```typescript
public resetExternalId(): void
```

##### `resetHostedZoneId` <a name="resetHostedZoneId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.resetHostedZoneId"></a>

```typescript
public resetHostedZoneId(): void
```

##### `resetNameserver` <a name="resetNameserver" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.resetNameserver"></a>

```typescript
public resetNameserver(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetSecretAccessKeyWo` <a name="resetSecretAccessKeyWo" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.resetSecretAccessKeyWo"></a>

```typescript
public resetSecretAccessKeyWo(): void
```

##### `resetSecretAccessKeyWoVersion` <a name="resetSecretAccessKeyWoVersion" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.resetSecretAccessKeyWoVersion"></a>

```typescript
public resetSecretAccessKeyWoVersion(): void
```

##### `resetTtl` <a name="resetTtl" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.resetTtl"></a>

```typescript
public resetTtl(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a PkiExternalCaSecretBackendDnsProviderAwsRoute53 resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.isConstruct"></a>

```typescript
import { pkiExternalCaSecretBackendDnsProviderAwsRoute53 } from '@cdktn/provider-vault'

pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.isTerraformElement"></a>

```typescript
import { pkiExternalCaSecretBackendDnsProviderAwsRoute53 } from '@cdktn/provider-vault'

pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.isTerraformResource"></a>

```typescript
import { pkiExternalCaSecretBackendDnsProviderAwsRoute53 } from '@cdktn/provider-vault'

pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.generateConfigForImport"></a>

```typescript
import { pkiExternalCaSecretBackendDnsProviderAwsRoute53 } from '@cdktn/provider-vault'

pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a PkiExternalCaSecretBackendDnsProviderAwsRoute53 resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PkiExternalCaSecretBackendDnsProviderAwsRoute53 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PkiExternalCaSecretBackendDnsProviderAwsRoute53 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_aws_route53#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the PkiExternalCaSecretBackendDnsProviderAwsRoute53 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.creationDate">creationDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.lastUpdatedDate">lastUpdatedDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.accessKeyIdInput">accessKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.assumeRoleArnInput">assumeRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.externalIdInput">externalIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.hostedZoneIdInput">hostedZoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.identifiersInput">identifiersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.mountInput">mountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.nameserverInput">nameserverInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.secretAccessKeyWoInput">secretAccessKeyWoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.secretAccessKeyWoVersionInput">secretAccessKeyWoVersionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.ttlInput">ttlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.accessKeyId">accessKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.assumeRoleArn">assumeRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.externalId">externalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.hostedZoneId">hostedZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.identifiers">identifiers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.mount">mount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.nameserver">nameserver</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.secretAccessKeyWo">secretAccessKeyWo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.secretAccessKeyWoVersion">secretAccessKeyWoVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.ttl">ttl</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `creationDate`<sup>Required</sup> <a name="creationDate" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.creationDate"></a>

```typescript
public readonly creationDate: string;
```

- *Type:* string

---

##### `lastUpdatedDate`<sup>Required</sup> <a name="lastUpdatedDate" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.lastUpdatedDate"></a>

```typescript
public readonly lastUpdatedDate: string;
```

- *Type:* string

---

##### `accessKeyIdInput`<sup>Optional</sup> <a name="accessKeyIdInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.accessKeyIdInput"></a>

```typescript
public readonly accessKeyIdInput: string;
```

- *Type:* string

---

##### `assumeRoleArnInput`<sup>Optional</sup> <a name="assumeRoleArnInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.assumeRoleArnInput"></a>

```typescript
public readonly assumeRoleArnInput: string;
```

- *Type:* string

---

##### `externalIdInput`<sup>Optional</sup> <a name="externalIdInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.externalIdInput"></a>

```typescript
public readonly externalIdInput: string;
```

- *Type:* string

---

##### `hostedZoneIdInput`<sup>Optional</sup> <a name="hostedZoneIdInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.hostedZoneIdInput"></a>

```typescript
public readonly hostedZoneIdInput: string;
```

- *Type:* string

---

##### `identifiersInput`<sup>Optional</sup> <a name="identifiersInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.identifiersInput"></a>

```typescript
public readonly identifiersInput: string[];
```

- *Type:* string[]

---

##### `mountInput`<sup>Optional</sup> <a name="mountInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.mountInput"></a>

```typescript
public readonly mountInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `nameserverInput`<sup>Optional</sup> <a name="nameserverInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.nameserverInput"></a>

```typescript
public readonly nameserverInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `secretAccessKeyWoInput`<sup>Optional</sup> <a name="secretAccessKeyWoInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.secretAccessKeyWoInput"></a>

```typescript
public readonly secretAccessKeyWoInput: string;
```

- *Type:* string

---

##### `secretAccessKeyWoVersionInput`<sup>Optional</sup> <a name="secretAccessKeyWoVersionInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.secretAccessKeyWoVersionInput"></a>

```typescript
public readonly secretAccessKeyWoVersionInput: number;
```

- *Type:* number

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.ttlInput"></a>

```typescript
public readonly ttlInput: number;
```

- *Type:* number

---

##### `accessKeyId`<sup>Required</sup> <a name="accessKeyId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.accessKeyId"></a>

```typescript
public readonly accessKeyId: string;
```

- *Type:* string

---

##### `assumeRoleArn`<sup>Required</sup> <a name="assumeRoleArn" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.assumeRoleArn"></a>

```typescript
public readonly assumeRoleArn: string;
```

- *Type:* string

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.externalId"></a>

```typescript
public readonly externalId: string;
```

- *Type:* string

---

##### `hostedZoneId`<sup>Required</sup> <a name="hostedZoneId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.hostedZoneId"></a>

```typescript
public readonly hostedZoneId: string;
```

- *Type:* string

---

##### `identifiers`<sup>Required</sup> <a name="identifiers" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.identifiers"></a>

```typescript
public readonly identifiers: string[];
```

- *Type:* string[]

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.mount"></a>

```typescript
public readonly mount: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `nameserver`<sup>Required</sup> <a name="nameserver" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.nameserver"></a>

```typescript
public readonly nameserver: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### ~~`secretAccessKeyWo`~~<sup>Required</sup> <a name="secretAccessKeyWo" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.secretAccessKeyWo"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```typescript
public readonly secretAccessKeyWo: string;
```

- *Type:* string

---

##### `secretAccessKeyWoVersion`<sup>Required</sup> <a name="secretAccessKeyWoVersion" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.secretAccessKeyWoVersion"></a>

```typescript
public readonly secretAccessKeyWoVersion: number;
```

- *Type:* number

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.ttl"></a>

```typescript
public readonly ttl: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PkiExternalCaSecretBackendDnsProviderAwsRoute53Config <a name="PkiExternalCaSecretBackendDnsProviderAwsRoute53Config" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.Initializer"></a>

```typescript
import { pkiExternalCaSecretBackendDnsProviderAwsRoute53 } from '@cdktn/provider-vault'

const pkiExternalCaSecretBackendDnsProviderAwsRoute53Config: pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.identifiers">identifiers</a></code> | <code>string[]</code> | List of domain identifiers this provider handles. Supports wildcard patterns with leftmost `*` (e.g. `*.example.com`). |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.mount">mount</a></code> | <code>string</code> | The path where the PKI External CA secret backend is mounted. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.name">name</a></code> | <code>string</code> | Name of the DNS provider configuration. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.accessKeyId">accessKeyId</a></code> | <code>string</code> | AWS access key ID for Route53 API access. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.assumeRoleArn">assumeRoleArn</a></code> | <code>string</code> | AWS IAM role ARN to assume for Route53 operations. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.externalId">externalId</a></code> | <code>string</code> | External ID for AWS STS AssumeRole. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.hostedZoneId">hostedZoneId</a></code> | <code>string</code> | AWS Route53 hosted zone ID. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.nameserver">nameserver</a></code> | <code>string</code> | Address of a DNS nameserver (`host` or `host:port`) to use when verifying DNS-01 challenge propagation instead of the domain's primary nameserver. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.region">region</a></code> | <code>string</code> | AWS region for Route53 operations. Defaults to `us-east-1`. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.secretAccessKeyWo">secretAccessKeyWo</a></code> | <code>string</code> | AWS secret access key for Route53 API access. Write-only — not returned by Vault. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.secretAccessKeyWoVersion">secretAccessKeyWoVersion</a></code> | <code>number</code> | Version counter for the write-only `secret_access_key` field. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.ttl">ttl</a></code> | <code>number</code> | TTL for DNS TXT records used in DNS-01 challenges in seconds. Defaults to `60`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `identifiers`<sup>Required</sup> <a name="identifiers" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.identifiers"></a>

```typescript
public readonly identifiers: string[];
```

- *Type:* string[]

List of domain identifiers this provider handles. Supports wildcard patterns with leftmost `*` (e.g. `*.example.com`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_aws_route53#identifiers PkiExternalCaSecretBackendDnsProviderAwsRoute53#identifiers}

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.mount"></a>

```typescript
public readonly mount: string;
```

- *Type:* string

The path where the PKI External CA secret backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_aws_route53#mount PkiExternalCaSecretBackendDnsProviderAwsRoute53#mount}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the DNS provider configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_aws_route53#name PkiExternalCaSecretBackendDnsProviderAwsRoute53#name}

---

##### `accessKeyId`<sup>Optional</sup> <a name="accessKeyId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.accessKeyId"></a>

```typescript
public readonly accessKeyId: string;
```

- *Type:* string

AWS access key ID for Route53 API access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_aws_route53#access_key_id PkiExternalCaSecretBackendDnsProviderAwsRoute53#access_key_id}

---

##### `assumeRoleArn`<sup>Optional</sup> <a name="assumeRoleArn" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.assumeRoleArn"></a>

```typescript
public readonly assumeRoleArn: string;
```

- *Type:* string

AWS IAM role ARN to assume for Route53 operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_aws_route53#assume_role_arn PkiExternalCaSecretBackendDnsProviderAwsRoute53#assume_role_arn}

---

##### `externalId`<sup>Optional</sup> <a name="externalId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.externalId"></a>

```typescript
public readonly externalId: string;
```

- *Type:* string

External ID for AWS STS AssumeRole.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_aws_route53#external_id PkiExternalCaSecretBackendDnsProviderAwsRoute53#external_id}

---

##### `hostedZoneId`<sup>Optional</sup> <a name="hostedZoneId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.hostedZoneId"></a>

```typescript
public readonly hostedZoneId: string;
```

- *Type:* string

AWS Route53 hosted zone ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_aws_route53#hosted_zone_id PkiExternalCaSecretBackendDnsProviderAwsRoute53#hosted_zone_id}

---

##### `nameserver`<sup>Optional</sup> <a name="nameserver" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.nameserver"></a>

```typescript
public readonly nameserver: string;
```

- *Type:* string

Address of a DNS nameserver (`host` or `host:port`) to use when verifying DNS-01 challenge propagation instead of the domain's primary nameserver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_aws_route53#nameserver PkiExternalCaSecretBackendDnsProviderAwsRoute53#nameserver}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_aws_route53#namespace PkiExternalCaSecretBackendDnsProviderAwsRoute53#namespace}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region for Route53 operations. Defaults to `us-east-1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_aws_route53#region PkiExternalCaSecretBackendDnsProviderAwsRoute53#region}

---

##### `secretAccessKeyWo`<sup>Optional</sup> <a name="secretAccessKeyWo" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.secretAccessKeyWo"></a>

```typescript
public readonly secretAccessKeyWo: string;
```

- *Type:* string

AWS secret access key for Route53 API access. Write-only — not returned by Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_aws_route53#secret_access_key_wo PkiExternalCaSecretBackendDnsProviderAwsRoute53#secret_access_key_wo}

---

##### `secretAccessKeyWoVersion`<sup>Optional</sup> <a name="secretAccessKeyWoVersion" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.secretAccessKeyWoVersion"></a>

```typescript
public readonly secretAccessKeyWoVersion: number;
```

- *Type:* number

Version counter for the write-only `secret_access_key` field.

Increment this value to trigger an update to the secret access key in Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_aws_route53#secret_access_key_wo_version PkiExternalCaSecretBackendDnsProviderAwsRoute53#secret_access_key_wo_version}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.ttl"></a>

```typescript
public readonly ttl: number;
```

- *Type:* number

TTL for DNS TXT records used in DNS-01 challenges in seconds. Defaults to `60`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_aws_route53#ttl PkiExternalCaSecretBackendDnsProviderAwsRoute53#ttl}

---



